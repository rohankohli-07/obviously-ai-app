import type { User } from '@/models/types'
import { TokenResponse as GoogleToken } from '@react-oauth/google'
import { createContext, useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router'

import { storage } from '@/lib/storage'

import { useNavigate } from 'react-router'

type UserContext = {
  user: User
  googleToken: GoogleToken
}

const UserContext = createContext<UserContext | null>(null)

export function UserProvider() {
  const navigate = useNavigate()
  const [value, setValue] = useState<UserContext | null>(null)

  useEffect(() => {
    let googleToken: GoogleToken | null = null
    let user: User | null = null

    try {
      googleToken = storage.getGoogleToken()
    } catch {
      navigate('/sign-in')
      return
    }
    try {
      user = storage.getUser()
    } catch {
      navigate('/not-authorized')
    }

    if (googleToken && user) {
      setValue({ googleToken, user })
    }
  }, [navigate])

  if (!value) return null
  return (
    <UserContext.Provider value={value}>
      <Outlet />
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context == null) {
    throw new Error('useUser has to be used within <UserProvider>')
  }
  return context
}
