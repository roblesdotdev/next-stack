'use client'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { GithubIcon } from './icons'

export default function AuthForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <div className="mt-8 flex w-full max-w-sm flex-col gap-3">
      <Button
        variant="outline"
        disabled={isLoading}
        onClick={() => {
          setIsLoading(true)
          signIn('github')
        }}
      >
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center gap-2">
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <GithubIcon className="h-4 w-4" />
            )}
            <span>Github</span>
          </div>
        </div>
      </Button>
    </div>
  )
}
