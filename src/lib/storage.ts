import { User } from '@/models/types'
import { TokenResponse as GoogleToken } from '@react-oauth/google'

const GOOGLE_TOKEN_STORAGE_KEY = 'googleToken'
const USER_STORAGE_KEY = 'user'

export const storage = {
  getGoogleToken: (): GoogleToken => {
    const googleTokenString = sessionStorage.getItem(GOOGLE_TOKEN_STORAGE_KEY)

    if (!googleTokenString) {
      throw new Error('Google token not found in session storage')
    }

    return JSON.parse(googleTokenString) as GoogleToken
  },

  setGoogleToken: (googleToken: GoogleToken) => {
    // setting in session storage so login screen can be easily view
    sessionStorage.setItem(
      GOOGLE_TOKEN_STORAGE_KEY,
      JSON.stringify(googleToken)
    )
  },

  deleteGoogleToken: () => sessionStorage.removeItem(GOOGLE_TOKEN_STORAGE_KEY),

  getUser: (): User => {
    const userString = sessionStorage.getItem(USER_STORAGE_KEY)

    if (!userString) {
      throw new Error('User not found in session storage')
    }

    return JSON.parse(userString) as User
  },

  setUser: (user: User) => {
    // setting in session storage so login screen can be easily view
    sessionStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user))
  },

  deleteUser: () => sessionStorage.removeItem(USER_STORAGE_KEY),

  clearAll: () => {
    localStorage.clear()
    sessionStorage.clear()
  },
}
