"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelizetypescript = require('sequelize-typescript');
var _database = require('../../database'); var _database2 = _interopRequireDefault(_database);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

class User extends _sequelizetypescript.Model {
  
   

  
   

  
   

  
   
}
User.init({
  name: _sequelizetypescript.DataType.STRING,
  email: _sequelizetypescript.DataType.STRING,
  password: _sequelizetypescript.DataType.VIRTUAL,
  password_hash: _sequelizetypescript.DataType.STRING
}, {
  defaultScope: {
    attributes: {
      exclude: ['password_hash']
    }
  },
  sequelize: _database2.default
})

User.beforeSave(async (user) => {
  if (user.password) {
    user.password = await _bcryptjs2.default.hash(user.password, 8) 
  }
})

exports. default = User
