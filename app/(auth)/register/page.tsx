import Link from 'next/link'
import { Balancer } from 'react-wrap-balancer'
import AuthForm from '~/components/auth-form'
import { buttonVariants } from '~/components/ui/button'

export const metadata = {
  title: 'Register',
}

export default function RegisterPage() {
  return (
    <>
      <div className="flex items-center justify-end p-6">
        <Link href="/login" className={buttonVariants({ size: 'sm' })}>
          Login
        </Link>
      </div>
      <div className="mt-24 flex flex-col items-center justify-center px-6">
        <h1 className="text-2xl font-bold md:text-4xl">Register</h1>
        <p className="mt-2 max-w-xl text-center text-fg-muted md:text-lg">
          <Balancer>
            This is strictly for demo purposes - only your email and profile
            picture will be stored.
          </Balancer>
        </p>
        <AuthForm />
        <div className="pt-4">
          <p className="px-8 text-center text-sm text-fg-muted">
            By clicking continue, you agree to our Terms of Service and Privacy
            Policy.
          </p>
        </div>
      </div>
    </>
  )
}
