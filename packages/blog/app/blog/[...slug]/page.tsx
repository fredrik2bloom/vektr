export const dynamic = 'force-dynamic'

export default function BlogPost() {
  return (
    <div>
      <h1>Blog Post</h1>
      <p>Individual blog posts are temporarily disabled while we resolve compatibility issues.</p>
      <p>Please check back soon!</p>
    </div>
  )
}

// Disable generateStaticParams to prevent prerendering
export async function generateStaticParams() {
  return []
}