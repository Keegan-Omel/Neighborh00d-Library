const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    'rdehk2aelvvf7ku1',
    'fkryaum70a34cijz',
    'rcm2hrcls29pteqc',
    {
      host: 'ckshdphy86qnz0bj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
