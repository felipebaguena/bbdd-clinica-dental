'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Doctors',
    [
      {id: 1, user_id: 1, speciality_id: 1, doctor_number: 1, updatedAt: "2023-03-04", createdAt: "2023-01-12"},
      {id: 3, user_id: 3, speciality_id: 2, doctor_number: 3, updatedAt: "2023-03-04", createdAt: "2023-01-12"},

    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
