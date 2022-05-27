import { Request, Response } from 'express'
import { AuthenticateUserService } from 'services/auth/authenticate-user.service'

export class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body

    try {
      const token = await this.authenticateUserUseCase.execute({
        email,
        password,
      })

      return response.status(200).json(token)
    } catch (err) {
      return response.status(400).json({
        error: err.message || 'Unexpected error',
      })
    }
  }
}
