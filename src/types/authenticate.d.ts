type Authenticate = {
  permissions: string[]
}

type LoginData = {
  token: string
  remember?: boolean
  redirectUri?: string
}

type LogoutData = {
  redirectUri?: string
}

type Token = {
  exp: number
  iat: number
  iss: string
  sub: string
}
