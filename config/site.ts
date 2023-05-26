import type { SiteConfig } from '~/types'

export const siteConfig: SiteConfig = {
  name: 'Henry Stack',
  title: 'Henry Stack | Next.js starter',
  description:
    'An application built using the new router, server components, and all the latest features of Next.js 13.',
  url: 'https://henry-stack.vercel.app',
  repoUrl: 'https://github.com/roblesdotdev/henry-stack',
  theme: '#121212',
  author: {
    name: 'Aldo R. Robles',
    url: 'https://linkedin.com/in/robles-ra',
  },
}

export const VERCEL_DEPLOY_URL =
  'https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Froblesdotdev%2Fhenry-stack&env=NEXTAUTH_SECRET,GITHUB_CLIENT_ID,GITHUB_CLIENT_SECRET&project-name=henry-next-project&repository-name=henry-next-project&demo-title=Henry%20Stack&demo-description=Next.js%20starter%20template&demo-url=https%3A%2F%2Fhenry-stack.vercel.app/&stores=%5B%7B%22type%22%3A%22postgres%22%7D%5D&'
