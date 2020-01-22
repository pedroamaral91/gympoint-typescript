import User from '../models/User'
import { ModelInterface } from '../contracts/NonAbstractModel'
import { Request, Response } from 'express'

class UserController {
  public user: ModelInterface<User>;

  constructor (userModel: ModelInterface<User>) {
    this.user = userModel
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
