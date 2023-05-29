**Henry Stack** is a Next.js starter template. The goal of this project is to explore 
the new features of Next.js 13, focusing on the use of [app dir](https://nextjs.org/docs/app/api-reference/next-config-js/appDir) 
and the implementation of [advanced routing patterns](https://nextjs.org/docs/app/building-your-application/routing#advanced-routing-patterns).

### What's in the stack

- [x] Serverless Postgres [Vercel](https://vercel.com/docs/storage/vercel-postgres)
- [x] Authentication using [NextAuth.js](https://next-auth.js.org/)
- [x] Database ORM with [Prisma](https://prisma.io)
- [x] Styling with [Tailwind](https://tailwindcss.com/)
- [x] Code formatting with [Prettier](https://prettier.io)
- [x] Linting with [ESLint](https://eslint.org)
- [x] Static Types with [TypeScript](https://typescriptlang.org)
- [x] [GitHub Actions](https://github.com/features/actions) for validate code.
- [ ] End-to-end testing with [Playwright](https://playwright.dev/)

### Getting Started

1. Clone this repository
2. Install the dependencies: `pnpm install`
3. Copy the `.env-sample` to `.env` with your environment variables.
4. Run the development mode: `pnpm dev`

### One click deploy

You can deploy this template with one click.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Froblesdotdev%2Fhenry-stack&env=NEXTAUTH_SECRET,GITHUB_CLIENT_ID,GITHUB_CLIENT_SECRET&project-name=henry-next-project&repository-name=henry-next-project&demo-title=Henry%20Stack&demo-description=Next.js%20starter%20template&demo-url=https%3A%2F%2Fhenry-stack.vercel.app/&stores=%5B%7B%22type%22%3A%22postgres%22%7D%5D&)

