import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import routes from './routes'
import './database'

class App {
  public server: express.Application

  public constructor (connection) {
    this.server = connection()
    this.middlewares()
    this.routes()
  }

  private middlewares (): void {
    this.server.use(morgan('dev'))
    this.server.use(express.json())
    this.server.use(cors())
  }

  private routes (): void {
    this.server.use(routes)
  }
}

export default App
