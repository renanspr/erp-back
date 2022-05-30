import { CreateUserService } from './create-user.service'

const createUserSpy = jest.fn()
const findByEmailSpy = jest.fn()

const createUserService = new CreateUserService({
  create: createUserSpy,
  findByEmail: findByEmailSpy,
})

describe('Create user', () => {
  it('should be able to create a user', async () => {
    await expect(
      createUserService.execute({
        name: 'John Doe',
        email: 'test@email.com',
        password: '123456',
      })
    ).resolves.not.toThrow()

    expect(createUserSpy).toHaveBeenCalled()
  })

  it('should not be able to create a user without a name', async () => {
    await expect(
      createUserService.execute({
        name: '',
        email: 'test@email.com',
        password: '123456',
      })
    ).rejects.toThrow()
  })

  it('should not be able to create a user without a email', async () => {
    await expect(
      createUserService.execute({
        name: 'John Doe',
        email: '',
        password: '123456',
      })
    ).rejects.toThrow()
  })

  it('should not be able to create a user without a password', async () => {
    await expect(
      createUserService.execute({
        name: 'John Doe',
        email: 'test@email.com',
        password: '',
      })
    ).rejects.toThrow()
  })
})
