'use client'

import { siteConfig } from '~/config/site'
import { Button } from './ui/button'

export function AuthorLink() {
  return (
    <Button asChild variant="link" size="base">
      <a href={siteConfig.author.url} target="_blank" rel="noreferrer">
        {siteConfig.author.name}
      </a>
    </Button>
  )
}
