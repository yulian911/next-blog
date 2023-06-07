import Link from 'next/link';
import React from 'react';

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
];
const Navbar = () => {
  return (
    <div className="h-[100px] flex justify-between items-center">
      <Link href="/" className={`font-bold text-[22px]`}>
        yulian
      </Link>
      <div className={`flex items-center gap-[20px]`}>
        {/* <DarkModeToggle /> */}
        {links.map(link => (
          <Link key={link.id} href={link.url} className={``}>
            {link.title}
          </Link>
        ))}
        {/* {session.status === "authenticated" && (
      <button className={styles.logout} onClick={signOut}>
        Logout
      </button>
    )} */}
      </div>
    </div>
  );
};

export default Navbar;
