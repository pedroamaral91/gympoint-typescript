"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelizetypescript = require('sequelize-typescript');
var _database = require('../../database'); var _database2 = _interopRequireDefault(_database);
var _bcryptjs = require('bcryptjs'); var bcrypt = _interopRequireWildcard(_bcryptjs);

class User extends _sequelizetypescript.Model {
  
   

  
   

  
   

  
   

  static checkPassword (instance, password) {
    return bcrypt.compare(password, instance.password_hash)
  };
}
User.init({
  name: _sequelizetypescript.DataType.STRING,
  email: _sequelizetypescript.DataType.STRING,
  password: _sequelizetypescript.DataType.VIRTUAL,
  password_hash: _sequelizetypescript.DataType.STRING
}, {
  sequelize: _database2.default
})

User.beforeSave(async (user) => {
  if (user.password) {
    user.password_hash = await bcrypt.hash(user.password, 8)
  }
})

exports. default = User
