"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Pet extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      tipo: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      sexo: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      idade: {
        type: _sequelize2.default.FLOAT,
        defaultValue: '',
      },
      raca: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      contato: {
        type: _sequelize2.default.STRING,
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
} exports.default = Pet;
