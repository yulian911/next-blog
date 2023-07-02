import React from 'react'
import styles from './page.module.css'

export const metadata = {
  title: 'J4SK13R Dev',
  description: 'This is the description',
}

const Layout = ({ children }) => {
  return (
    <div>
      <h1 className={styles.mainTitle}>Our Works</h1>
      {children}
    </div>
  )
}

export default Layout
