import type { User } from '@/models/types'
import { TokenResponse as GoogleToken } from '@react-oauth/google'
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'

import { storage } from '@/lib/storage'

import { useNavigate } from 'react-router'

type UserContext = {
  user: User
  googleToken: GoogleToken
}

const UserContext = createContext<UserContext | null>(null)

export function UserProvider({ children }: PropsWithChildren) {
  const navigate = useNavigate()
  const [value, setValue] = useState<UserContext | null>(null)

  useEffect(() => {
    let googleToken: GoogleToken | null = null
    let user: User | null = null

    try {
      googleToken = storage.getGoogleToken()
      console.log(googleToken)
    } catch {
      console.log('navigate to sign in')
      navigate('/sign-in')
      return
    }
    try {
      user = storage.getUser()
      console.log(user)
    } catch {
      console.log('navigate to not authorized')
      navigate('/not-authorized')
    }

    if (googleToken && user) {
      setValue({ googleToken, user })
    }
  }, [navigate])

  if (!value) return null
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useUser() {
  const context = useContext(UserContext)
  if (context == null) {
    throw new Error('useUser has to be used within <UserProvider>')
  }
  return context
}
