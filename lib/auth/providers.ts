import GitHubProvider from 'next-auth/providers/github'
import { type Provider } from 'next-auth/providers'
import { env } from '~/env.mjs'

// @see https://next-auth.js.org/v3/configuration/providers
export const providers: Provider[] = [
  GitHubProvider({
    clientId: env.GITHUB_CLIENT_ID,
    clientSecret: env.GITHUB_CLIENT_SECRET,
  }),
  /*
  GoogleProvider({
    clientId: env.GOOGLE_CLIENT_ID,
    clientSecret: env.GOOGLE_CLIENT_SECRET,
  }),
  */
]
