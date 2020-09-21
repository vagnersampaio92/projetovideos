const express = require('express');
const routes = express.Router();
const auth = require('../src/app/middlewares/auth')


const AdminController = require('./controllers/AdminController')
const SessionControllerAdmin = require('./controllers/SessionControllerAdmin')

const UsuarioController = require('./controllers/UsuarioController')
const SessionControllerUsuario = require('./controllers/SessionControllerusuario')

const Exercicios = require ('./controllers/exercicioscontroller')

// store listagem exclui

routes.post('/signupadmin', AdminController.store);
routes.post('/loginadmin', SessionControllerAdmin.store)

routes.post('/signupusuario', UsuarioController.store);
routes.post('/loginusuario', SessionControllerUsuario.store)

routes.post('/cadastraexercicio', Exercicios.store);
routes.get('/listagemexercic', Exercicios.listagem);
routes.get('/listagemusuario/:id', Exercicios.listagemusuario);
routes.delete('/excluiexercicio/:id', Exercicios.exclui);



routes.use(auth)


module.exports = routes;

// npx sequelize db:migrate
// yarn sequelize migration:create --name=create-icones