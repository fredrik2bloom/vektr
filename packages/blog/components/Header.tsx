import Link from './Link'

const Header = () => {
  return (
    <header className="flex items-center justify-center w-full bg-white dark:bg-gray-950 py-10">
      <Link href="/" aria-label="vektr.news" className="text-2xl font-bold">
        vektr.news
      </Link>
    </header>
  )
}

export default Header
