import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'
import { createUserController } from '@controllers/user'
import swaggerDocs from '../../swagger.json'

const router = Router()

// Home
router.get('/', (request, response) => {
  response.send('Server is up :)')
})

// User routes
router.post('/api/users', (request, response, next) => {
  createUserController(request, response, next)
})

// Docs
router.use('/api-docs', swaggerUi.serve)
router.get('/api-docs', swaggerUi.setup(swaggerDocs))

export default router
