'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Interventions',
    [
        {id: 1, name: "Implantología", description: "Los implantes dentales pueden ser de diferentes tamaños, superficies y materiales. Se pueden utilizar fijaciones de titanio u otros materiales biocompatibles, que no generen rechazo por parte del sistema inmunológico.", price: 950, image:"https://bbdd-clinica-dental-production.up.railway.app/intervencion_5.png", updatedAt: "2023-03-04", createdAt: "2023-01-12"},
        {id: 2, name: "Odontología estética", description: "La falta de armonía dental puede conllevar, sobre todo, problemas de autoestima. La alteración de la composición estética de la sonrisa abre la puerta a tratamientos cosméticos que logren devolver a los pacientes la estética deseada.", price: 855 , updatedAt: "2023-04-02", image:"https://bbdd-clinica-dental-production.up.railway.app/intervencion_6.png", createdAt: "2023-02-11"},
        {id: 3, name: "Periodoncia", description: "La alteración del equilibrio de las bacterias que habitan en la boca y la acumulación de placa bacteriana pueden producir inflamación y sangrado en las encías y dar lugar a enfermedades conocidas como periodontales.", price: 420, image:"https://bbdd-clinica-dental-production.up.railway.app/intervencion_7.png", updatedAt: "2023-04-04", createdAt: "2023-03-12"},
        {id: 4, name: "Operatoria dental", description: "La endodoncia es uno de los tratamientos más usados en odontología. Disponer de las últimas innovaciones tecnológicas supone una ayuda inestimable para poder aportar mayor comodidad al paciente.", price: 250, image:"https://bbdd-clinica-dental-production.up.railway.app/intervencion_8.png", updatedAt: "2023-04-06", createdAt: "2023-03-18"},

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
