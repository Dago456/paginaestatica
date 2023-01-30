import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })


export default function aboutpage() {
  return (
    <div className={styles.container}>

      <head>
        <title>Home - practica</title>
        <meta name="description" content="about Page" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Ir a <a href="/">home</a>
        </h1>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>)
      </main>
    </div>
  )
}
