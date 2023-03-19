'use strict';
const bcrypt = require('bcrypt');

const password = "Clavefalsa.1"
const encryptedPassword = bcrypt.hashSync(password,10);



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users',
  [
      {id: 1,name: "Alyna", surname: "Nastas Romaniuc", email: "alyna@alyna.com",password: encryptedPassword, nif: "335267282S", direction: "Juan Luis 3", birth_date: "1992-04-30", phone: "6766573883", updatedAt: "2023-03-04", createdAt: "2023-03-04"},
      {id: 2,name: "Ignacio",surname: "Furio", email: "ignacio@gmail.com", password: encryptedPassword, nif: "325267282S",direction: "Juan Martin de la vera 5", birth_date: "1991-05-20", phone: "333222111", updatedAt: "2023-05-04", createdAt: "2023-05-04"},
      {id: 3,name: "María", surname: "Josep Fernández", email: "maria@maria.com",password: encryptedPassword, nif: "31243282M", direction: "Luis de Bremont 23", birth_date: "1960-04-30", phone: "653373883", updatedAt: "2023-03-04", createdAt: "2023-03-04"},
      {id: 4,name: "Álvaro", surname: "Bernabé", email: "alvaro@alvro.com",password: encryptedPassword, nif: "876567282C", direction: "Azah de acosta 54", birth_date: "1993-10-10", phone: "676611283", updatedAt: "2023-03-04", createdAt: "2023-03-04"},
      {id: 5,name: "Lidia", surname: "Bernabé", email: "lidia@lidia.com",password: encryptedPassword, nif: "677267282S", direction: "Rafalafena 38", birth_date: "1986-04-10", phone: "556573883", updatedAt: "2022-03-04", createdAt: "2022-03-04"},
      {id: 6,name: "Laura", surname: "Sánchez Lucas", email: "laura@laura.com",password: encryptedPassword, nif: "544267277P", direction: "Joan ribera i berenguer", birth_date: "1990-08-04", phone: "4231173883", updatedAt: "2023-05-04", createdAt: "2023-05-04"}


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

