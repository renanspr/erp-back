import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

export const validateToken = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const bearer = request.headers.authorization

  if (!bearer) {
    return response.status(401).json({
      error: 'Token not provided',
    })
  }

  const [, token] = bearer.split(' ')

  try {
    verify(token, process.env.ACCESS_TOKEN_SECRET_KEY as string)

    return next()
  } catch (err) {
    return response.status(401).json({
      error: 'Token invalid',
    })
  }
}
