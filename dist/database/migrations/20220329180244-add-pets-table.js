"use strict";module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('pets', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        allowNull: true,
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sexo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      idade: {
        type: Sequelize.FLOAT,
        defaultValue: null,
        allowNull: true,
      },
      raca: {
        type: Sequelize.STRING,
        defaultValue: '',
        allowNull: true,
      },
      contato: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    return queryInterface.dropTable('pets');
  },
};
