const {DataTypes} = require('sequelize');
const sequelize = require('../../util/sequelize');
const Staff = require('./staff');

const User = sequelize.define("user" , {
    staffId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'staffs',
          key: 'id'
        }
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
  }, {
    timestamps: false
  });

  Staff.hasOne(User);
  User.belongsTo(Staff);
  
  
  module.exports = User;