export interface CreateUserData {
  name: string
  email: string
  password: string
}

export interface ShowUserData {
  id: string
  name: string
  email: string
}

export interface CreateUserRepository {
  create(user: CreateUserData): Promise<void>
  findByEmail(email: string): Promise<CreateUserData | null>
}

export interface ShowUserRepository {
  findAll(): Promise<ShowUserData[]>
  findByEmail(email: string): Promise<CreateUserData | null>
}
