"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }



class UserController {
  

  constructor (userModel) {
    this.user = userModel
  }

   async store (req, res) {
    try {
      const userExists = await this.user.findOne({ where: { email: req.body.email } })
      if (userExists) {
        return res.status(400).json({ message: 'Email already exists' })
      }
      const user = await this.user.create(req.body)
      return res.status(201).json(user)
    } catch (er) {
      return res.status(400).json(er)
    }
  }

   async index (req, res) {
    try {
      const users = await this.user.findAll()
      return res.json({ users })
    } catch (er) {
      return res.status(400).json({ error: 'User cannot be created.' })
    }
  }
}

exports. default = UserController
