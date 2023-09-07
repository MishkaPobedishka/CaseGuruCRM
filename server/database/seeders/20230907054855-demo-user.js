'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      staffId: 'cbd504bf-9606-479d-9f56-98bc4e3c2cf2',
      email: 'superHR@gmail.com',
      password: '$2a$04$CUznr0Z.zQFdZRh7cqLkp.ovKbmlZc8OwcRr2Ke7CNfhAG/Wg2ktK',
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
