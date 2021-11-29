import { Links, LiveReload, Meta, Scripts, ScrollRestoration } from 'remix'
import RouteChangeAnnouncement from '../_remix-default/RouteChangeAnnouncement'

export default function Document({
  children,
  title,
  lang = 'en',
  theme = 'retro',
}: {
  children: React.ReactNode
  title?: string
  lang?: string
  theme?: string
}) {
  return (
    <html lang={lang} data-theme={theme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>

      <body>
        {children}

        <RouteChangeAnnouncement />
        <ScrollRestoration />
        <Scripts />

        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
