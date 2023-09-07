module.exports = class LoginUserDTO {
    id;
    vacancy

    constructor(model) {
        this.id = model.id;
        this.vacancy = model.vacancy;
    }
}