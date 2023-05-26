import Link from 'next/link'
import { siteConfig } from '~/config/site'
import { buttonVariants } from '../ui/button'
import { getCurrentUser } from '~/lib/session'

export default async function Navbar() {
  const user = await getCurrentUser()
  return (
    <header className="sticky inset-x-0 top-0 z-30 flex h-16 w-full flex-col justify-center bg-canvas/5 backdrop-blur">
      <nav>
        <ul className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-4 text-sm">
          <li>
            <Link href="/">
              <span className="text-base font-medium">{siteConfig.name}</span>
            </Link>
          </li>
          <li className="ml-auto flex items-center gap-2 text-base">
            <Link
              className={buttonVariants({ size: 'sm', variant: 'outline' })}
              href={!user ? '/login' : '/dashboard'}
            >
              {!user ? 'Sign In' : 'My account'}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
