const express = require('express');//importando o express que é uma lib
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();//desacoplando o modo de rotas do Express em uma nova variavel

routes.post('/session',SessionController.create);

routes.get('/ongs',OngController.index);
routes.post('/ongs',OngController.create);

routes.get('/profile',ProfileController.index);


routes.get('/incidents',IncidentController.index);
routes.post('/incidents',IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);

module.exports = routes;
//Deixando rotas disponiveis para que o arquivo Index.js possa acessar as rotas:
//atenção!!!!Para exportar uma variavel de dentro de um arquivo no Node.js module.exports = routes















/**
 * METODOS HTTP:
 * 
 * GET: listar/buscar uma informação no Backend
 * POST: Criar uma informação no Backend
 * PUT: Alterar uma informação no Backend.
 * DELETE:Deletar uma informação no Backend.
 */

 /**
  * Tipos de parametros:
  * Query Params: São parâmetros nomeados enviados na rota após "?" (Filtros, Paginação).
  * Router Params: Parâmetros utlizados para identificar recursos. /id
  * Request body: Corpo da requisição utilizado para Criar ou Alterar recursos
  * request →guarda todos os dados que vem atraves da requisição
  * response→ responsavel por retornar uma resposta para o usuario
  */

 /**SQL:MySQL, SQlite, PostgreeSQL, Oracle, Microsoft SQL Server formatos esses que se comunica com o banco
  * NoSQL:MongoDB, CouchDB 
  * Query builder: que iremos usar é o Knex.JS
  */