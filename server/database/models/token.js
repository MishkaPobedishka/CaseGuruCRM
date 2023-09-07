const {DataTypes} = require('sequelize');
const sequelize = require('../../util/sequelize');
const Staff = require('./user')

const Token = sequelize.define("token" , {
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'staffs',
      key: 'id'
    }
  },
  refreshToken: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  timestamps: false
});

Staff.hasOne(Token);
Token.belongsTo(Staff);

module.exports = Token;