import { ModelInterface } from './NonAbstractModel'
import { Model } from 'sequelize-typescript'
import { Request, Response } from 'express'
import User from '../model/User';

export interface UserInterface {
  user: ModelInterface<User>
  index(req: Request, res: Response): Promise<{}>
}
