const bcrypt = require('bcrypt')
import { PrismaCreateUserModel } from '@models/user/create-user.model'

interface CreateUserRequest {
  name: string
  email: string
  password: string
}

export class CreateUserService {
  constructor(private prismaUserModel: PrismaCreateUserModel) {}

  async execute(request: CreateUserRequest) {
    const { name, email, password } = request

    if (!name || !email || !password) {
      throw new Error('Missing required fields')
    }

    const userExists = await this.prismaUserModel.findByEmail(email)
    const hashPassword = await encryptPassword(password)

    if (userExists) {
      throw new Error('User already exists')
    }

    await this.prismaUserModel.create({ name, email, password: hashPassword })
  }
}

const encryptPassword = (password: string) => {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)

  return hash
}
