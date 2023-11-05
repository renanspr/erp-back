import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import router from './routes'
import { globalErrorHandler, notFoundHandler } from '@middlewares/error-handler'

dotenv.config()

const PORT = process.env.PORT
const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(router)
app.use(notFoundHandler)
app.use(globalErrorHandler)

app.listen(PORT, () => { console.log(`Server is listening on port ${PORT}!`) })

export { app }
