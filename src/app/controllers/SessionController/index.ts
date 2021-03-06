import { Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'
import User from '../../models/User'

class SessionController {
  async store (req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email } })

    if (!user) {
      return res.status(401).json({ message: 'Not authorized' })
    }

    if (!await User.checkPassword(user, password)) {
      return res.status(401).json({ message: 'Not authorized' })
    }

    const { id, name } = user

    return res.json({ id, name, email, token: jwt.sign({ id }, 'secret') })
  }
}

export default new SessionController()
