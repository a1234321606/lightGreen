const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const app = express();
const policyholderRoute = require('./routes/policyholderRoute');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(policyholderRoute);

sequelize
  .sync()
  .then(Policyholder => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
