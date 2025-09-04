export const dynamic = 'force-dynamic'

export default function CategoryPage() {
  return (
    <div>
      <h1>Categories</h1>
      <p>Category pages are temporarily disabled.</p>
    </div>
  )
}

export async function generateStaticParams() {
  return []
}