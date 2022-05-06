import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Pet from '../models/Pet';
import User from '../models/User';
import Foto from '../models/Foto';

const models = [User, Pet, Foto];
const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
