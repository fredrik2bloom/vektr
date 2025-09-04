export const dynamic = 'force-dynamic'

export default function BlogPagePagination() {
  return (
    <div>
      <h1>Blog Pages</h1>
      <p>Blog pagination is temporarily disabled.</p>
    </div>
  )
}

export async function generateStaticParams() {
  return []
}