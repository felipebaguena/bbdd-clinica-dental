'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Specialities',
    [
      {id: 1, type: "denture" , updatedAt: "2023-03-04", createdAt: "2022-01-12"},
      {id: 2, type: "dental aesthetics", updatedAt: "2023-03-04", createdAt: "2023-01-21"},
      {id: 3, type: "orthodontics", updatedAt: "2023-03-04", createdAt: "2022-03-20"},
      {id: 4, type: "implantology" , updatedAt: "2023-03-04", createdAt: "2022-01-12"},
      {id: 5, type: "general orthodontics", updatedAt: "2023-03-04", createdAt: "2022-02-11"},
  
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
