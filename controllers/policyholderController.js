const { Sequelize } = require('sequelize');
const { Policyholder, PolicyholderTop } = require('../models/policyholderModel');


exports.getPolicyholders = (req, res, next) => {
  Policyholder.findAll()
    .then(Policyholder => {
      res.status(200).json(Policyholder);
    })
    .catch(err => {
      res.status(500).json(error);
    });
};

exports.getPolicyholder = (req, res, next) => {
  const code = req.params.code;

  PolicyholderTop.findOne({
    where: {
      [Sequelize.Op.or]: [
        { l: { code: code } },
        { r: { code: code } }
      ]
    }
  }).then(result => {
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json("no data found");
    }
  }).catch(error => {
    res.status(500).json(error);
  });
};

