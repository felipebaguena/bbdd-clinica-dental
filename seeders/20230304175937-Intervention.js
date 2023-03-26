'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Interventions',
    [
        {id: 1, name: "Invisible orthodontics", description: "It's a type of orthodontics that goes unnoticed by others, since it is usually the color of tooth enamel or transparent, as is the case with invisible aligners orthodontics.", price: 950, image:"https://bbdd-clinica-dental-production.up.railway.app/intervencion_1.png", updatedAt: "2023-03-04", createdAt: "2023-01-12"},
        {id: 2, name: "Dental cleaning", description: "The dental hygienist uses a small mirror to check around your teeth and gums for any signs of gingivitis (inflamed gums) or other potential concerns.", price: 53.34 , updatedAt: "2023-04-02", image:"https://bbdd-clinica-dental-production.up.railway.app/intervencion_2.png", createdAt: "2023-02-11"},
        {id: 3, name: "Teeth whitening", description: " Teeth whitening involves bleaching your teeth to make them lighter. It can't make your teeth brilliant white, but it can lighten the existing colour by several shades.", price: 220, image:"https://bbdd-clinica-dental-production.up.railway.app/intervencion_3.png", updatedAt: "2023-04-04", createdAt: "2023-03-12"},
        {id: 4, name: "Teeth Prueba", description: " Teeth whitening involves bleaching your teeth to make them lighter. It can't make your teeth brilliant white, but it can lighten the existing colour by several shades.", price: 250, image:"https://bbdd-clinica-dental-production.up.railway.app/intervencion_4.png", updatedAt: "2023-04-06", createdAt: "2023-03-18"},

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
