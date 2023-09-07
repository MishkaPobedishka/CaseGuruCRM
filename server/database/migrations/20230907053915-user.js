'use strict';

/** @type {import('sequelize-cli').Migration} */
const {DataTypes} = require("sequelize");
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      staffId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: 'staffs',
            schema: 'public'
          },
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
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
