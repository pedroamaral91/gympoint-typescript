"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _jsonwebtoken = require('jsonwebtoken'); var jwt = _interopRequireWildcard(_jsonwebtoken);
var _User = require('../../models/User'); var _User2 = _interopRequireDefault(_User);

class SessionController {
  async store (req, res) {
    const { email, password } = req.body
    const user = await _User2.default.findOne({ where: { email } })

    if (!user) {
      return res.status(401).json({ message: 'Not authorized' })
    }

    if (!await _User2.default.checkPassword(user, password)) {
      return res.status(401).json({ message: 'Not authorized' })
    }

    const { id, name } = user

    return res.json({ id, name, email, token: jwt.sign({ id }, 'secret') })
  }
}

exports. default = new SessionController()
