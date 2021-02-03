import Sequelize from 'sequelize';

import sequelize from '../util/database';

const Product = sequelize.define('products', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  location: Sequelize.STRING,
  contries: Sequelize.INTEGER,
  region: Sequelize.STRING,
  cost: Sequelize.DOUBLE
},
{
  timestamps: false,
});

export default Product;
