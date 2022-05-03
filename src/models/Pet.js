import Sequelize, { Model } from 'sequelize';

export default class Pet extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      tipo: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      sexo: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      idade: {
        type: Sequelize.FLOAT,
        defaultValue: '',
      },
      raca: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      contato: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'pet_id' });
    this.belongsTo(models.User, { foreignKey: 'id' });
  }
}
