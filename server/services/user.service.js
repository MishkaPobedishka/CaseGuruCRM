const ApiError = require('../exceptions/api.error');
const User = require('../database/models/user');
const Staff = require('../database/models/staff');
const LoginUserDTO = require('../dtos/auth/login-user');
const tokenService = require('./token.service');
const sequelize = require('../util/sequelize');
const bcrypt = require('bcrypt');

class userService {
    async login(email, password) {
        await sequelize.sync();
        const user = await User.findOne({
            where: {email: email}
        });
        if (!user) {
            throw ApiError.BadRequest(`Пользователь с email ${email} не найден`)
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            throw ApiError.BadRequest('Неверный пароль')
        }
        const staff = await Staff.findOne({
            where: {id: user.staffId}
        })
        if (!staff) {
            throw ApiError.BadRequest(`Сотрудник не найден`)
        }
        const loginUserDTO = new LoginUserDTO(staff);
        const tokens = tokenService.generateTokens({...loginUserDTO});
        await tokenService.saveRefreshToken(staff.id, tokens.refreshToken);

        return {
            ...tokens,
            user: loginUserDTO 
        }
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);
        return token;
    }
}

module.exports = new userService()