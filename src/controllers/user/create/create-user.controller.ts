import { Request, Response } from 'express'
import { CreateUserService } from '@services/user/create-user.service'

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body

    try {
      await this.createUserUseCase.execute({
        name,
        email,
        password,
      })

      return response.status(201).json({
        message: 'User created successfully',
      })
    } catch (err) {
      return response.status(400).json({
        error: err.message || 'Unexpected error',
      })
    }
  }
}
