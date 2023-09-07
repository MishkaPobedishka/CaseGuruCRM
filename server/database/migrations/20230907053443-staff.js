'use strict';

/** @type {import('sequelize-cli').Migration} */
const {DataTypes} = require("sequelize");
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('staffs', { 
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
      },
      firstName: {
          type: DataTypes.TEXT,
          allowNull: false
      },
      lastName: {
          type: DataTypes.TEXT,
          allowNull: false
      },
      surName: {
          type: DataTypes.TEXT,
          allowNull: false
      },
      birthDate: {
          type: DataTypes.DATEONLY,
          allowNull: false
      },
      vacancy: {
          type: DataTypes.TEXT,
          allowNull: false
      },
      salary: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      hireDate: {
          type: DataTypes.DATEONLY,
          allowNull: false
      },
      isFired: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
      },
      fireDate: {
          type: DataTypes.DATEONLY,
          allowNull: true,
      },
    }, {
      timestamps: false
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('staffs');
  }
};
