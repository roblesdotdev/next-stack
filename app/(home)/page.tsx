import { ArrowRightIcon, ShieldIcon } from 'lucide-react'
import Link from 'next/link'
import { Balancer } from 'react-wrap-balancer'
import {
  EslintIcon,
  GithubIcon,
  NextJSIcon,
  PrismaIcon,
  TailwindIcon,
  TypescriptIcon,
  VercelIcon,
} from '~/components/icons'
import { buttonVariants } from '~/components/ui/button'
import { VERCEL_DEPLOY_URL, siteConfig } from '~/config/site'

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center px-4">
      <div className="mx-auto w-full max-w-7xl">
        <section className="flex flex-col items-center justify-center gap-2 py-16">
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
          <h1 className="my-2 max-w-3xl bg-gradient-to-br from-fg to-fg/60 bg-clip-text text-center text-4xl font-medium text-transparent md:text-7xl">
            <Balancer>Take your projects to the next level</Balancer>
          </h1>
          <p className="mb-6 max-w-3xl text-center text-fg-muted md:text-xl">
            <Balancer>
              Simplify your development process and create{' '}
              <span className="whitespace-nowrap">high-quality</span> web
              applications quickly and efficiently.
            </Balancer>
          </p>
          <Link href="/dashboard" className={buttonVariants()}>
            Get Started
          </Link>
        </section>

        <section className="pb-16 md:mt-32">
          <p className="mx-auto text-center text-fg-muted md:mb-16 md:max-w-xl md:text-lg lg:text-xl">
            The purpose of this project is to explore and leverage the new
            features of{' '}
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-fg/80 transition hover:text-fg hover:underline"
            >
              Next.js App Router
            </a>
            .
          </p>
          <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="mx-auto grid max-w-5xl grid-cols-2 justify-center gap-x-4 gap-y-9 pt-4 text-fg-muted md:grid-cols-3 md:place-items-center">
            {siteFeatures.map(feat => (
              <div
                key={feat.title}
                className="flex flex-col gap-2 md:max-w-xs lg:p-4"
              >
                {feat.icon}
                <h2 className="line-clamp-2 text-sm md:text-lg">
                  <span className="font-medium text-fg">{feat.title}</span>{' '}
                  {feat.description}
                </h2>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 pb-8 md:mt-32">
          <p className="mx-auto text-center text-fg-muted md:max-w-xl md:text-lg lg:mb-8 lg:text-xl">
            The code can be found on{' '}
            <a
              className="font-medium text-fg/80 transition hover:text-fg hover:underline"
              href={siteConfig.repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
            , or you can deploy your own instance on Vercel with just one click.
          </p>
          <div className="flex items-center justify-center pt-8 lg:pt-0">
            <a
              className={buttonVariants({ variant: 'secondary' })}
              href={VERCEL_DEPLOY_URL}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center gap-2">
                <VercelIcon className="h-4 w-4" />
                <span>Deploy to vercel</span>
              </div>
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}

const siteFeatures = [
  {
    title: 'Next.js 13.',
    icon: <NextJSIcon className="h-4 w-4 lg:h-6 lg:w-6" />,
    description: 'App dir, routing and more.',
  },
  {
    title: 'Typescript.',
    icon: <TypescriptIcon className="h-4 w-4 lg:h-6 lg:w-6" />,
    description: 'Catch mistakes in your editor.',
  },
  {
    title: 'Prisma.',
    icon: (
      <div className="flex items-center gap-2 lg:gap-4">
        <PrismaIcon className="h-4 w-4 lg:h-6 lg:w-6" />
      </div>
    ),
    description: 'Database ORM. Vercel postgres database.',
  },
  {
    title: 'Authentication.',
    icon: <ShieldIcon className="h-4 w-4 lg:h-6 lg:w-6" />,
    description: 'NextAuth with middlewares.',
  },
  {
    title: 'Tailwindcss.',
    icon: <TailwindIcon className="h-4 w-4 lg:h-6 lg:w-6" />,
    description: 'Utility-first CSS framework.',
  },
  {
    title: 'Static Analysis.',
    icon: (
      <div className="flex items-center gap-2 lg:gap-4">
        <EslintIcon className="h-4 w-4 lg:h-6 lg:w-6" />
      </div>
    ),
    description: 'Linting, formatting and check code.',
  },
]
