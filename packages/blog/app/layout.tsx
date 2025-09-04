import 'css/tailwind.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vektr Crypto Feed',
  description: 'Cryptocurrency news aggregator',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white text-black antialiased">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex min-h-screen flex-col">
            <header className="flex items-center justify-between py-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Vektr</h1>
              </div>
              <nav className="flex items-center space-x-6">
                <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
                <a href="/blog" className="text-gray-600 hover:text-gray-900">Blog</a>
                <a href="/projects" className="text-gray-600 hover:text-gray-900">Projects</a>
                <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
              </nav>
            </header>
            <main className="flex-1 py-8">{children}</main>
            <footer className="border-t py-6 text-center text-sm text-gray-500">
              © 2025 Vektr. All rights reserved.
            </footer>
          </div>
        </div>
      </body>
    </html>
  )
}
