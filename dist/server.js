"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);
var _express = require('express'); var _express2 = _interopRequireDefault(_express);

const server = new (0, _app2.default)(_express2.default)

server.server.listen(3000)
