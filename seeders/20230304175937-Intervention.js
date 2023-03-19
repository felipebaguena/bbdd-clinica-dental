'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Interventions',
    [
        {id: 1, name: "Invisible orthodontics", description: "It's a type of orthodontics that goes unnoticed by others, since it is usually the color of tooth enamel or transparent, as is the case with invisible aligners orthodontics.", price: 950, updatedAt: "2023-03-04", createdAt: "2023-01-12"},
        {id: 2, name: "Dental cleaning", description: "The dental hygienist uses a small mirror to check around your teeth and gums for any signs of gingivitis (inflamed gums) or other potential concerns.", price: 53.34 , updatedAt: "2023-04-02", createdAt: "2023-02-11"},
        {id: 3, name: "Teeth whitening", description: " Teeth whitening involves bleaching your teeth to make them lighter. It can't make your teeth brilliant white, but it can lighten the existing colour by several shades.", price: 220, updatedAt: "2023-04-04", createdAt: "2023-03-12"},

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
