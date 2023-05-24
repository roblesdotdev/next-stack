import { ChevronLeftIcon } from 'lucide-react'
import Link from 'next/link'
import { Balancer } from 'react-wrap-balancer'
import AuthForm from '~/components/auth-form'
import { Button, buttonVariants } from '~/components/ui/button'

export const metadata = {
  title: 'Login',
}

export default function LoginPage() {
  return (
    <>
      <div className="flex items-center p-6">
        <Link
          href="/"
          className={buttonVariants({ variant: 'outline', size: 'sm' })}
        >
          <div className="flex items-center gap-2">
            <ChevronLeftIcon className="h-3 w-3" />
            <span>Back</span>
          </div>
        </Link>
      </div>

      <div className="mt-24 flex flex-col items-center justify-center px-6">
        <h1 className="text-2xl font-bold md:text-4xl">Welcome back</h1>
        <p className="mt-2 max-w-xl text-center text-fg-muted md:text-lg">
          <Balancer>
            This is strictly for demo purposes - only your email and profile
            picture will be stored.
          </Balancer>
        </p>
        <AuthForm />
        <div className="pt-4">
          <p className="px-8 text-center text-sm text-gray-400">
            <Link
              className={buttonVariants({ variant: 'link', size: 'base' })}
              href="/register"
            >
              Don&apos;t have an account? Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
