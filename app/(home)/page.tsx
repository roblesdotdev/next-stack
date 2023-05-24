import { Balancer } from 'react-wrap-balancer'

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center px-4">
      <div className="mx-auto w-full max-w-7xl">
        <section className="flex flex-col items-center justify-center gap-4 pt-16">
          <h1 className="mb-4 mt-6 max-w-3xl text-center text-4xl font-medium delay-[0.15s] md:text-7xl">
            <Balancer>Take your projects to the next level</Balancer>
          </h1>
          <p className="mb-8 max-w-3xl text-center text-fg-muted delay-[0.25s] md:text-xl">
            <Balancer>
              Simplify your development process and create{' '}
              <span className="whitespace-nowrap">high-quality</span> web
              applications quickly and efficiently.
            </Balancer>
          </p>
          <button className="rounded-lg border-2 border-[#8556bc] bg-transparent px-6 py-3 font-medium outline-none ring-[#8556bc] ring-offset-4 ring-offset-[#0e0c16] transition hover:bg-[#8556bc] focus:bg-[#8556bc] focus:ring-2">
            Get Started
          </button>
        </section>
      </div>
    </main>
  )
}
