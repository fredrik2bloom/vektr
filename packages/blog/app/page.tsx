export const dynamic = 'force-dynamic'

export default async function Page() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Vektr Crypto Feed
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Latest cryptocurrency news and analysis powered by AI
        </p>
      </div>
      <div className="container py-12">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p>
            Welcome to Vektr, your intelligent cryptocurrency news aggregator. 
            We collect, process, and curate the latest crypto news from trusted sources 
            using advanced AI technology.
          </p>
          <p>
            Our system automatically processes breaking news, market analysis, and 
            regulatory updates to bring you the most relevant cryptocurrency content.
          </p>
        </div>
      </div>
    </div>
  )
}
