'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles',
    [
        {id: 1, privilege: "Admin", updatedAt: "2023-03-04", createdAt: "2023-01-12"},
        {id: 2, privilege: "Doctor",updatedAt: "2023-03-04", createdAt: "2023-02-21"},
        {id: 3, privilege: "User", updatedAt: "2023-03-04", createdAt: "2023-03-04"},
  
  
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
