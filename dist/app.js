"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _morgan = require('morgan'); var _morgan2 = _interopRequireDefault(_morgan);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);
require('./database');

class App {
  

   constructor (connection) {
    this.server = connection()
    this.middlewares()
    this.routes()
  }

   middlewares () {
    this.server.use(_morgan2.default.call(void 0, 'dev'))
    this.server.use(_express2.default.json())
    this.server.use(_cors2.default.call(void 0, ))
  }

   routes () {
    this.server.use(_routes2.default)
  }
}

exports. default = App
