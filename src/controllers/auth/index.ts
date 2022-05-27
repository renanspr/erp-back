import { PrismaShowUserModel } from '@models/user/show-user.model'
import { AuthenticateUserService } from '@services/auth/authenticate-user.service'
import { AuthenticateUserController } from './authenticate-user.controller'

const prismaUserModel = new PrismaShowUserModel()
const createUserService = new AuthenticateUserService(prismaUserModel)
const authenticateUserController = new AuthenticateUserController(
  createUserService
)

export { authenticateUserController }
