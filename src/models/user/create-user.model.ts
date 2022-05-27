import prisma from 'prisma'
import { CreateUserData, CreateUserRepository } from './user.repository'

export class PrismaCreateUserModel implements CreateUserRepository {
  async create({ name, email, password }: CreateUserData) {
    await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    })
  }

  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    return user
  }
}
