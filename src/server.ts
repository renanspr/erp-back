import express from 'express'
import router from './routes'

const cors = require('cors')

const app = express()
const port = 3333

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(process.env.PORT || port, () =>
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port ${port}!`)
)
