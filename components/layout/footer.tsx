import { siteConfig } from '~/config/site'
import { buttonVariants } from '../ui/button'

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-canvas-muted py-8">
      <p className="text-center text-sm text-fg-muted">
        {siteConfig.name} by
        <a
          className={buttonVariants({ variant: 'link', size: 'base' })}
          href={siteConfig.author.url}
          target="_blank"
          rel="noreferrer"
        >
          {siteConfig.author.name}
        </a>
      </p>
    </footer>
  )
}
