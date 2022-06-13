import { Router } from 'express'
import { createUserController } from '@controllers/user/create'
import { authenticateUserController } from '@controllers/auth'
import { validateToken } from 'middleware'

const router = Router()

// User routes
router.post('/api/users', (request, response) => {
  createUserController.handle(request, response)
})

// Auth routes
router.post('/api/login', (request, response) => {
  authenticateUserController.handle(request, response)
})

router.get('/api/dashboard', validateToken, (request, response) => {
  response.send('Protected route')
})

router.get('/api', (request, response) => {
  response.send('Server is up :)')
})

export default router
