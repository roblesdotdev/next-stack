import { ArrowRightIcon, GithubIcon } from 'lucide-react'
import { Balancer } from 'react-wrap-balancer'
import { Button } from '~/components/ui/button'
import { siteConfig } from '~/config/site'

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center px-4">
      <div className="mx-auto w-full max-w-7xl">
        <section className="flex flex-col items-center justify-center gap-2 pt-16">
          <a
            target="_blank"
            rel="noreferrer"
            href={siteConfig.repoUrl}
            className="flex h-7 items-center gap-2 whitespace-nowrap rounded-full bg-canvas-muted px-6 text-[13px] outline-none ring-primary ring-offset-4 ring-offset-canvas hover:opacity-90 focus-visible:ring-2"
          >
            <GithubIcon className="h-4 w-4 " />
            <span>Star on Github</span>
            <span className="ml-2 flex items-center justify-center rounded-full bg-white/10 p-1">
              <ArrowRightIcon className="h-3 w-3" />
            </span>
          </a>
          <h1 className="my-2 max-w-3xl text-center text-4xl font-medium delay-[0.15s] md:text-7xl">
            <Balancer>Take your projects to the next level</Balancer>
          </h1>
          <p className="mb-6 max-w-3xl text-center text-fg-muted delay-[0.25s] md:text-xl">
            <Balancer>
              Simplify your development process and create{' '}
              <span className="whitespace-nowrap">high-quality</span> web
              applications quickly and efficiently.
            </Balancer>
          </p>
          <Button>Get Started</Button>
        </section>
      </div>
    </main>
  )
}
