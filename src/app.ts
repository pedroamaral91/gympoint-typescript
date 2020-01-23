import './bootstrap'
import express, { Application } from 'express'
import cors from 'cors'
import routes from './routes'
import './database'

class App {
  public server: Application

  public constructor (connection: Application) {
    this.server = connection
    this.middlewares()
    this.routes()
  }

  private middlewares (): void {
    this.server.use(express.json())
    this.server.use(cors())
  }

  private routes (): void {
    this.server.use(routes)
  }
}

export default App
