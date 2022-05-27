import prisma from 'prisma'
import { ShowUserRepository } from './user.repository'

export class PrismaShowUserModel implements ShowUserRepository {
  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    return user
  }

  async findAll() {
    const users = await prisma.user.findMany()

    return users
  }
}
