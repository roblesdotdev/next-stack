import clsx from 'clsx'
import './globals.css'
import { Inter } from 'next/font/google'
import { siteConfig } from '~/config/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: `${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'bg-canvas text-fg')}>
        {children}
      </body>
    </html>
  )
}
