export type SignInCredential = {
  username: string
  password: string
}

export type SignInResponse = {
  token: string
  user: {
    username: string
  }
}

export type SignUpResponse = SignInResponse

export type SignUpCredential = {
  username: string
}

export type ForgotPassword = {
  email: string
}

export type ResetPassword = {
  password: string
}
