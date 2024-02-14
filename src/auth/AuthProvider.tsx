import { ReactNode, useEffect } from 'react'

import { AUTH_CREDENTIAL, USER_CREDENTIAL } from '@/constants/auth'
import { useAuth } from '@/store/auth'
import { getCookie } from 'cookies-next'

type Props = {
  children: ReactNode
  isCheckAuth: boolean
}

const AuthProvider = ({ children, isCheckAuth }: Props) => {
  // ** States
  const { login, logout } = useAuth()

  useEffect(() => {
    const initAuth = async (): Promise<void> => {
      const storedToken = getCookie(AUTH_CREDENTIAL)
      const userData = getCookie(USER_CREDENTIAL)
      console.log('user',userData)
      const user = userData ? JSON.parse(userData) :''
      if (storedToken && user) {
        login(
          { token: storedToken },
          {
            ...user,
          }
        )
        return
      }
      if (isCheckAuth) {
        logout()
        return
      }
    }
    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>{children}</>
}

export default AuthProvider
