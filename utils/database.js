const Sequelize = require('sequelize');
const sequelize = new Sequelize('candyshop-db', 'root', 'pritam123', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
