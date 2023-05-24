import Footer from '~/components/layout/footer'
import Navbar from '~/components/layout/navbar'

type HomeLayoutProps = {
  children: React.ReactNode
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* @ts-expect-error */}
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
