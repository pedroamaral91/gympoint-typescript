import User from '../../models/User'
import { ModelInterface } from '../../contracts/NonAbstractModel'
import { Request, Response } from 'express'

class UserController {
  public user: ModelInterface<User>;

  constructor (userModel: ModelInterface<User>) {
    this.user = userModel
  }

  public async store (req: Request, res: Response): Promise<Response> {
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

  public async index (req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.user.findAll()
      return res.json({ users })
    } catch (er) {
      console.log(er)
    }
  }
}

export default UserController
