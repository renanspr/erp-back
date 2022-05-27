const bcrypt = require('bcrypt')
import { sign } from 'jsonwebtoken'
import { PrismaShowUserModel } from '@models/user/show-user.model'

interface ShowUserRequest {
  email: string
  password: string
}

export class AuthenticateUserService {
  constructor(private prismaShowUserModel: PrismaShowUserModel) {}

  async execute(request: ShowUserRequest) {
    const { email, password } = request

    const user = await this.prismaShowUserModel.findByEmail(email)

    if (!user) {
      throw new Error('User or password invalid')
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      throw new Error('User or password invalid')
    }

    const token = sign({}, process.env.ACCESS_TOKEN_SECRET_KEY as string, {
      subject: user.id,
      expiresIn: '15s',
    })

    return {
      token,
    }
  }
}
