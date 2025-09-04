import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vektr Crypto Feed',
  description: 'Cryptocurrency news aggregator',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div>
          <h1>Vektr</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/blog">Blog</a>
            <a href="/projects">Projects</a>
            <a href="/about">About</a>
          </nav>
          <main>{children}</main>
          <footer>© 2025 Vektr</footer>
        </div>
      </body>
    </html>
  )
}
