'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Appointments',
    [
    
      {id: 1, doctor_id: 1, patient_id: 4, intervention_id: 3,   date: "2023-02-13", comments:" Pain at base of tooth and gum #30 for past few weeks",  updatedAt: "2023-01-04", createdAt: "2023-01-12"},
      {id: 2, doctor_id: 3, patient_id: 5, intervention_id: 2,   date: "2023-01-10", comments:"Latex allergy. On medication for high blood pressure.", updatedAt: "2023-02-05", createdAt: "2023-01-12"},
      {id: 3, doctor_id: 3, patient_id: 6, intervention_id: 1,   date: "2023-03-02", comments:"Shadow in x-ray at tooth #31 indicative of cavity", updatedAt: "2023-03-06", createdAt: "2023-01-12"}

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
