import { Button } from '@/components/ui/Button'

import { useSignIn } from '@/api/mutation/useSignIn'
import userGroup from '@/assets/Icons/user-group.svg'

export function SignIn() {
  const signIn = useSignIn()

  return (
    <div className="flex h-full w-full flex-col gap-8">
      <div className="flex h-14 w-14 place-items-center">
        <img src={userGroup} className="h-7 w-7" alt="User Group" />
      </div>
      <Button onClick={signIn}>Sign in</Button>
    </div>
  )
}
