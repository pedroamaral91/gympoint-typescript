import { ModelInterface } from './NonAbstractModel'
import { Request, Response } from 'express'
import User from '../models/User'

export interface UserInterface {
  user: ModelInterface<User>
  index(req: Request, res: Response): Promise<{}>
}
