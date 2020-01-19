"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('./app/controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _User = require('./app/model/User'); var _User2 = _interopRequireDefault(_User);

const routes = _express.Router.call(void 0, )

const userController = new (0, _UserController2.default)(_User2.default)

routes.get('/', (req, res) => userController.index(req, res))

exports. default = routes
