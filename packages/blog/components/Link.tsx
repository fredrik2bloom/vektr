/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'

// We've added `children` to the props being destructured.
const CustomLink = ({
  href,
  children,
  ...rest
}: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    // Now we render the `children` inside the Link component.
    return (
      <Link className="break-words" href={href} {...rest}>
        {children}
      </Link>
    )
  }

  if (isAnchorLink) {
    // Similarly, `children` are rendered inside the `<a>` tag.
    return (
      <a className="break-words" href={href} {...rest}>
        {children}
      </a>
    )
  }

  // And here as well for external links.
  return (
    <a className="break-words" target="_blank" rel="noopener noreferrer" href={href} {...rest}>
      {children}
    </a>
  )
}

export default CustomLink