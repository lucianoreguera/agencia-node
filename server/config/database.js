const Sequelize = require('sequelize');
require('dotenv').config({ path: 'variables.env' });

module.exports = new Sequelize(process.env.BD_NAME, process.env.BD_USER, process.env.BD_PASS, {
    host: process.env.BD_HOST,
    dialect: 'mysql',
    port: process.env.BD_PORT,
    pool: {
      min: 0,
      max: 2,
      idle: 10000
    },
    define: {
      timestamps: false
    },
    benchmark: false,
    logging: false
  });