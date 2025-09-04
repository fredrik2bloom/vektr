export const dynamic = 'force-dynamic'

export default function NotFound() {
  return (
    <div className="text-center space-y-6">
      <div>
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
      </div>
      
      <div className="space-y-4">
        <p className="text-gray-600">Sorry we couldn't find this page.</p>
        <p className="text-gray-600">But don't worry, you can find plenty of other things on our homepage.</p>
        <p>
          <a 
            href="/" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Back to homepage
          </a>
        </p>
      </div>
    </div>
  )
}