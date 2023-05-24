import { siteConfig } from '~/config/site'
import { AuthorLink } from '../external-links'

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-canvas-muted py-8">
      <p className="text-center text-sm text-fg-muted">
        {siteConfig.name} by <AuthorLink />
      </p>
    </footer>
  )
}
