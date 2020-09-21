const express = require('express');
const routes = express.Router();
const auth = require('../src/app/middlewares/auth')


const AdminController = require('./controllers/AdminController')
const SessionControllerAdmin = require('./controllers/SessionControllerAdmin')

const UsuarioController = require('./controllers/UsuarioController')
const SessionControllerUsuario = require('./controllers/SessionControllerusuario')

routes.post('/signupadmin', AdminController.store);
routes.post('/loginadmin', SessionControllerAdmin.store)

routes.post('/signupusuario', UsuarioController.store);
routes.post('/loginusuario', SessionControllerUsuario.store)


routes.use(auth)


module.exports = routes;

// npx sequelize db:migrate
// yarn sequelize migration:create --name=create-icones