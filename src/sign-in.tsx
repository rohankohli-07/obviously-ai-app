import { Button } from '@/components/ui/Button'

import { useSignIn } from '@/api/mutation/useSignIn'
import googleLogo from '@/assets/Icons/google_logo.png'
import linkedinLogo from '@/assets/Icons/linkedin_logo.png'
import userGroup from '@/assets/Icons/user-group.svg'
import obviouslyAILogo from '@/assets/Logo_Brandmark_FullColor.svg'
import { Input } from '@/components/ui/Input'
import { Text } from '@/components/ui/Text'
import { useCallback } from 'react'
import { Link } from 'react-router'

const Header = () => (
  <div className="flex w-full flex-col items-center justify-center gap-6">
    <div className="border-obviously-gray-500 bg-obviously-gray-100 flex h-14 w-14 items-center justify-center rounded-xl border">
      <img src={userGroup} className="h-7 w-7" alt="User Group" />
    </div>
    <div>
      <Text
        className="text-obviously-black-800 mb-3 text-center text-3xl"
        weight="semibold"
      >
        Sign In
      </Text>
      <Text className="text-md text-obviously-black-500" weight="normal">
        Welcome back! Let’s get started with AI
      </Text>
    </div>
  </div>
)

const SignInCard = () => {
  const signIn = useSignIn()
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault()
      e.stopPropagation()
      signIn()
    },
    [signIn]
  )
  return (
    <div className="border-obviously-gray-600 shadow-4xl flex w-full flex-col rounded-xl border px-10 py-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div>
          <label
            htmlFor="email"
            className="text-obviously-black-600 text-md mb-1.5 font-medium"
          >
            Email
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-obviously-black-600 text-md mb-1.5 font-medium"
          >
            Password
          </label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Create a password"
          />
        </div>
        <Button type="submit">Sign In</Button>
        <div className="flex items-center">
          <hr className="border-obviously-gray-800 me-2 flex-1 border-t" />
          <Text className="text-obviously-gray-900" weight="semibold">
            OR
          </Text>
          <hr className="border-obviously-gray-800 ms-2 flex-1 border-t" />
        </div>
        <Button variant="outline" type="submit">
          <img src={googleLogo} className="h-6 w-6" alt="Google Logo" />
          Sign up with Google
        </Button>
        <Button variant="outline" type="submit">
          <img src={linkedinLogo} className="h-6 w-6" alt="Google Logo" />
          Sign up with Linkedin
        </Button>
      </form>
    </div>
  )
}

const SignUp = () => (
  <Text
    className="text-obviously-black-500 text-center text-sm"
    weight="normal"
  >
    Don't have an account?&nbsp;
    <Link className="text-obviously-blue-500 font-semibold" to="/">
      Sign Up
    </Link>
  </Text>
)

const Copyright = () => (
  <Text className="text-obviously-black-500 mb-8 ms-8 text-sm" weight="normal">
    © Copyrights 2025 by Obviously AI, Inc. All rights reserved.
  </Text>
)

export function SignIn() {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between overflow-auto">
      <img
        src={obviouslyAILogo}
        className="ms-8 mt-8 w-[132px]"
        alt="Obviously AI Logo"
      />
      <div className="flex w-[460px] flex-col gap-8 self-center">
        <Header />
        <SignInCard />
        <SignUp />
      </div>
      <Copyright />
    </div>
  )
}
