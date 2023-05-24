interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl">{children}</div>
    </div>
  )
}
