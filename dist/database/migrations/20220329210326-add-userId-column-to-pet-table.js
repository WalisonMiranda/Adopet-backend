"use strict";module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'pets',
    'user_id',
    {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  ),

  down: () => {},
};
