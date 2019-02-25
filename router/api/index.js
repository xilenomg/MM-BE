const express = require('express');
const ApiRouter = express.Router();
const ApiRequestController = require('../../requestControllers/ApiRequestController');

ApiRouter.get('/cpf/get', ApiRequestController.get);

module.exports = ApiRouter;