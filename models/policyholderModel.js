const Sequelize = require('sequelize');

const sequelize = require('../util/database');

// only save nodes which have no children nodes
const Policyholder = sequelize.define('Policyholder', {
  code: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  registration_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  introducer_code: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  l: {
    type: Sequelize.JSON,
    allowNull: true,
  },
  r: {
    type: Sequelize.JSON,
    allowNull: true,
  },
});

// only save nodes which have children nodes
const PolicyholderTop = sequelize.define('PolicyholderTop', {
  code: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  registration_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  introducer_code: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  l: {
    type: Sequelize.JSON,
    allowNull: true,
  },
  r: {
    type: Sequelize.JSON,
    allowNull: true,
  },
});

PolicyholderTop.hasMany(Policyholder);

Policyholder.belongsTo(PolicyholderTop, {
  foreignKey: "introducer_code"
});


module.exports = { Policyholder, PolicyholderTop };