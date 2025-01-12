import { storage } from '@/lib/storage'
import { useNavigate } from 'react-router'

import { User } from '@/models/types'
import { TokenResponse as GoogleToken } from '@react-oauth/google'

const dummyGoogleToken: GoogleToken = {
  access_token: 'access_token',
  expires_in: 9832479287342,
  prompt: 'prompt',
  token_type: 'token_type',
  scope: 'scope',
}

const dummyUser: User = {
  email: 'test@gmail.com',
  name: 'Test User',
  id: 1,
}

// Sign in with a dummy user instead of the actual user as that requires
// deploying a production google app
export function useSignIn() {
  const navigate = useNavigate()

  const signIn = () => {
    storage.setGoogleToken(dummyGoogleToken)
    storage.setUser(dummyUser)
    navigate('/')
  }

  return signIn
}
