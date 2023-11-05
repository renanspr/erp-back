import { beforeEach, afterAll } from 'vitest'
import { resetDB } from './reset-db'

beforeEach(async () => {
  await resetDB()
})

afterAll(async () => {
  await resetDB()
})
