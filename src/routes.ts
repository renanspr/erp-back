import { Router } from 'express'
import { createUserController } from '@controllers/user/create'
import { authenticateUserController } from '@controllers/auth'
import { validateToken } from 'middleware'

const router = Router()

// User routes
router.post('/users', (request, response) => {
  createUserController.handle(request, response)
})

// Auth routes
router.post('/login', (request, response) => {
  authenticateUserController.handle(request, response)
})

router.get('/dashboard', validateToken, (request, response) => {
  response.send('Protected route')
})

export default router
