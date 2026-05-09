import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ypê Supermercado — Frescos, Qualidade e Economia',
  description: 'O Ypê Supermercado oferece produtos frescos, variedade e os melhores preços para a sua família. Hortifrúti, açougue, padaria, frios e muito mais.',
  keywords: 'supermercado, ypê, produtos frescos, hortifrúti, açougue, padaria, ofertas, supermercado local',
  authors: [{ name: 'Ypê Supermercado' }],
  openGraph: {
    title: 'Ypê Supermercado — Frescos, Qualidade e Economia',
    description: 'Produtos frescos, variedade e os melhores preços para a sua família.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=DM+Serif+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans bg-canvas-cream antialiased">
        {children}
      </body>
    </html>
  )
}
