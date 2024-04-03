import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"

const navItems = [
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact'}
]

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/" className="flex items-center">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>
      {navItems.map( ({ path, text }) => (
        <Link key={path} href={path}>{text}</Link>
      ))}
      <Link className="mr-2" href="/about">About</Link>
      <Link className="mr-2" href="/pricing">Pricing</Link>
      <Link className="mr-2" href="/contact">Contact</Link>
    </nav>
  )
}