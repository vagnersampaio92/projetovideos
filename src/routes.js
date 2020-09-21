const express = require('express');
const routes = express.Router();
const auth = require('../src/app/middlewares/auth')


const AdminController = require('./controllers/AdminController')
const SessionControllerAdmin = require('./controllers/SessionControllerAdmin')

routes.post('/signupadmin', AdminController.store);
routes.post('/loginadmin', SessionControllerAdmin.store)



routes.use(auth)
module.exports = routes;

// npx sequelize db:migrate
// yarn sequelize migration:create --name=create-icones