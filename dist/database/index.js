"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }
var _sequelizetypescript = require('sequelize-typescript');

var _database = require('../config/database'); var configDatabase = _interopRequireWildcard(_database);

const config = {
  ...configDatabase,
  dialect: configDatabase.dialect 
}

class Database {
  

  constructor () {
    this.init()
  }

   init () {
    this.connection = new (0, _sequelizetypescript.Sequelize)(config)
  }
}

exports. default = new Database().connection
