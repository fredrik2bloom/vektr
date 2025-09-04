import React from 'react'
import type { MDXComponents } from 'mdx/types'

interface MDXLayoutRendererProps {
  code: string
  components?: MDXComponents
  toc?: any
  [key: string]: any
}

export function MDXLayoutRenderer({ code, components = {}, ...rest }: MDXLayoutRendererProps) {
  // For now, just render a div with the content
  // This is a temporary fix until we can properly implement MDX rendering
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <div dangerouslySetInnerHTML={{ __html: code }} />
    </div>
  )
}
