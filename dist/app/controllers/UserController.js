"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }



class UserController {
  

  constructor (userModel) {
    this.user = userModel
  }

   async index (req, res) {
    try {
      const users = await this.user.findAll()
      return res.json({ users })
    } catch (er) {
      console.log(er)
    }
  }
}

exports. default = UserController
