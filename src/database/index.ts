import { Dialect } from 'sequelize'
import { Sequelize } from 'sequelize-typescript'

import * as configDatabase from '../config/database'

const config = {
  ...configDatabase,
  dialect: configDatabase.dialect as Dialect
}

class Database {
  connection: Sequelize

  constructor () {
    this.init()
  }

  private init (): void {
    this.connection = new Sequelize(config)
  }
}

export default new Database().connection
