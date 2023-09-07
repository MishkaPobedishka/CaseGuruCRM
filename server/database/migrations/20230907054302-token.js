'use strict';

/** @type {import('sequelize-cli').Migration} */
const {DataTypes} = require("sequelize");
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tokens', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: 'staffs',
            schema: 'public'
          },
          key: 'id'
        },
      },
      refreshToken: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    }, {
      timestamps: false
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tokens');
  }
};
