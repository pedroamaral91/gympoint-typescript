import { Router } from 'express'

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'

import User from './app/models/User'

const routes = Router()

const userController = new UserController(User)

routes.get('/', (req, res) => userController.index(req, res))

routes.post('/session', SessionController.store)

export default routes
