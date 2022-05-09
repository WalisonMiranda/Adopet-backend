require('dotenv').config();

import Sequelize from 'sequelize';
import Pet from '../models/Pet';
import User from '../models/User';
import Foto from '../models/Foto';

const models = [User, Pet, Foto];
const connection = new Sequelize(process.env.URL_CONECTION);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
