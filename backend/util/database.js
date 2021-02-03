import Sequelize from 'sequelize';

const sequelize = new Sequelize('voxdigital', 'root', '159635gg', {
  dialect: 'mysql',
  host: 'localhost'
});

export default sequelize;
