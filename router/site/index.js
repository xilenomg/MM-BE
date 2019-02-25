const express = require('express');
const SiteRouter = express.Router();
const SiteRequestController = require('../../requestControllers/SiteRequestController');

SiteRouter.get('/', SiteRequestController.index);
SiteRouter.get('/status', SiteRequestController.serverInfo)

module.exports = SiteRouter;