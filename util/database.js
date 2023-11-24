const Sequelize = require('sequelize');

const sequelize = new Sequelize('freedb_Member_db', 'freedb_Jay_Tang', 'a&F#5MAU8$Ke?3p', {
  dialect: 'mysql',
  host: 'sql.freedb.tech'
});

module.exports = sequelize;
