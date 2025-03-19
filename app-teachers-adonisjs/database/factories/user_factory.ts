import { Factory } from '@ioc:Adonis/Lucid/Factory'
import User from 'App/Models/User'

export default Factory.define(User, ({ faker }) => {
  return {
    full_name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  }
}).build()
