require('dotenv').config();

module.exports = {
  dialect: 'sqlite',
  storage: '../../database.sqlite',

  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },

};
