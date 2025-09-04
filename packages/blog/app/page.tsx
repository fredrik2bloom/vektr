export const dynamic = 'force-dynamic'

export default async function Page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Vektr Crypto Feed</h1>
        <p className="text-xl text-gray-600 mb-6">Latest cryptocurrency news and analysis powered by AI</p>
      </div>
      
      <div className="prose max-w-none">
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
  )
}