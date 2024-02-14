import { ReactElement, ReactNode, useEffect } from 'react'

import { useAuth } from '@/store/auth'

import { getCookie } from 'cookies-next'

import { AUTH_CREDENTIAL } from '@/constants/auth'
import { ROUTE } from '@/constants/routes'
import { useLocation, useNavigate } from 'react-router-dom'

interface GuestGuardProps {
  children: ReactNode
  fallback: ReactElement | null
}

const GuestGuard = (props: GuestGuardProps) => {
  const { children, fallback } = props
  const { user, loading } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()


  useEffect(() => {
    if (!location.pathname) {
      return
    }

    if (getCookie(AUTH_CREDENTIAL)) {
      navigate(ROUTE.DASHBOARD)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  if (loading || (!loading && user !== null)) {
    return fallback
  }

  return <>{children}</>
}

export default GuestGuard
