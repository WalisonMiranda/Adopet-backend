module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.changeColumn(
    'pets',
    'idade',
    {
      type: Sequelize.STRING,
      allowNull: true,
    },
  ),

  down: () => {},
};
