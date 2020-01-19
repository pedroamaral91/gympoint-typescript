import { Router } from 'express'
import UserController from './app/controllers/UserController'
import User from './app/model/User'

const routes = Router()

const userController = new UserController(User)

routes.get('/', (req, res) => userController.index(req, res))

export default routes
