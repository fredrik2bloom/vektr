import { genPageMetadata } from 'app/seo'

export const dynamic = 'force-dynamic'
export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          About Vektr
        </h1>
      </div>
      <div className="container py-12">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p>
            Vektr is an intelligent cryptocurrency news aggregation platform that leverages 
            advanced AI technology to curate and process the most relevant crypto news from 
            trusted sources across the web.
          </p>
          <h2>What We Do</h2>
          <ul>
            <li>Aggregate cryptocurrency news from multiple trusted sources</li>
            <li>Process content with AI for better readability and insights</li>
            <li>Automatically publish curated content to this blog</li>
            <li>Provide real-time market analysis and sentiment tracking</li>
          </ul>
          <h2>Technology Stack</h2>
          <p>
            Built with modern technologies including Node.js, OpenAI APIs, Supabase for data storage, 
            and Next.js for the frontend. Our system runs continuously to ensure you never miss 
            important cryptocurrency developments.
          </p>
        </div>
      </div>
    </div>
  )
}