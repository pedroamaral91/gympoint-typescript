import { Column, Model, DataType } from 'sequelize-typescript'
import connection from '../../database'
import bcrypt from 'bcryptjs'

class User extends Model<User> {
  @Column
  public name !: string

  @Column
  public email !: string

  @Column
  public password_hash !: string

  @Column
  public password !: string
}
User.init({
  name: DataType.STRING,
  email: DataType.STRING,
  password: DataType.VIRTUAL,
  password_hash: DataType.STRING
}, {
  defaultScope: {
    attributes: {
      exclude: ['password_hash']
    }
  },
  sequelize: connection
})

User.beforeSave(async (user) => {
  if (user.password) {
    user.password = await bcrypt.hash(user.password, 8) 
  }
})

export default User
