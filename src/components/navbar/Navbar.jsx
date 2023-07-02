'use client'

import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import DarkModeToggle from '../DarkMode/DarkModeToggle'
import { signOut, useSession } from 'next-auth/react'

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 4,
    title: 'About',
    url: '/about',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard',
  },
]
const Navbar = () => {
  const session = useSession()
  console.log(session)
  return (
    <div className="h-[100px] flex justify-between items-center">
      <Link href="/" className={`font-bold text-[22px]`}>
        J<span className="text-[red]">4</span>SK<span className="text-[red]">13</span>R
      </Link>
      <div className={`flex items-center gap-[20px]`}>
        <DarkModeToggle />
        {links.map(link => (
          <Link key={link.id} href={link.url} className={``}>
            {link.title}
          </Link>
        ))}
        {session.status === 'authenticated' && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar
