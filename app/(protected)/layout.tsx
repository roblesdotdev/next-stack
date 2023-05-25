import Link from 'next/link'
import { redirect } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'
import { siteConfig } from '~/config/site'
import { authOptions } from '~/lib/auth'
import { getCurrentUser } from '~/lib/session'

type DashboardLayoutProps = {
  children: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await getCurrentUser()

  if (!user) {
    return redirect(authOptions.pages?.signIn || '/login')
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-b-fg/10">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-medium">{siteConfig.name}</span>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button>User</button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Bar</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Foo</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="mx-auto w-full max-w-7xl p-6">{children}</main>
    </div>
  )
}
