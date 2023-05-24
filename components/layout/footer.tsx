import { siteConfig } from '~/config/site'

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-canvas-muted py-8">
      <p className="text-center text-sm text-fg-muted">
        {siteConfig.name} by{' '}
        <a
          href={siteConfig.author.url}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-fg hover:underline"
        >
          {siteConfig.author.name}
        </a>
      </p>
    </footer>
  )
}
