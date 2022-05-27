import { PrismaCreateUserModel } from '@models/user/create-user.model'
import { CreateUserService } from '@services/user/create-user.service'
import { CreateUserController } from './create-user.controller'

const prismaUserModel = new PrismaCreateUserModel()
const createUserService = new CreateUserService(prismaUserModel)
const createUserController = new CreateUserController(createUserService)

export { createUserController }
