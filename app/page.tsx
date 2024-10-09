import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'

const page = () => {
  return (
    <div className={styles.container}>
      <h1>St. Joseph&apos;s</h1>
      <h2>Home for Old Aged</h2>
      <p>An organization managed by the sisters of Our Lady of <br /> Grace and Compassion</p>
      <Link href="/about">Go to About</Link>
    </div>
  )
}

export default page