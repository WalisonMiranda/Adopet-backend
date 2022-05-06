require('dotenv').config();

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,

  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },

};
