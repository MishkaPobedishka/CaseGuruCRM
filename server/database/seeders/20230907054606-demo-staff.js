'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('staffs', [{
          id: 'cbd504bf-9606-479d-9f56-98bc4e3c2cf2',
          firstName: 'Карук',
          lastName: 'Михаил',
          surName: 'Иванович',
          birthDate: '1997-11-20',
          vacancy: 'HR-менеджер',
          salary: 50000,
          hireDate: '2023-09-03',
          isFired: false,
          fireDate: null,
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('staffs', null, {});
  }
};
