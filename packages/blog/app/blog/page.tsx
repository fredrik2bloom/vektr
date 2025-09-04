import { genPageMetadata } from 'app/seo'

export const dynamic = 'force-dynamic'
export const metadata = genPageMetadata({ title: 'Blog' })

export default async function BlogPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Crypto News Blog
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Latest cryptocurrency news and analysis
        </p>
      </div>
      <div className="container py-12">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p>
            Welcome to our cryptocurrency blog! This section will feature the latest news, 
            analysis, and insights from the crypto world once our content system is fully integrated.
          </p>
          <p>
            Our AI-powered system continuously monitors trusted cryptocurrency news sources 
            and will automatically publish curated content here.
          </p>
        </div>
      </div>
    </div>
  )
}