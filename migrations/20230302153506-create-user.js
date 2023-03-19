'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        required: true
      },
      surname: {
        type: Sequelize.STRING,
        required: true
      },
      email: {
        type: Sequelize.STRING,
        required: true,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        required: true,
      },
      nif: {
        type: Sequelize.STRING,
        required: true,
        unique: true
      },
      direction: {
        type: Sequelize.STRING
      },
      birth_date: {
        type: Sequelize.DATE
      },
      phone: {
        type: Sequelize.STRING,
        required: true,
        unique: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};