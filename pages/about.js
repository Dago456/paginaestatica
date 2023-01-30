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
        <p>
        <p className={styles.description}></p>
          a dios le pido
          que si me <h2> muero </h2>sea de <h1> amor </h1> 
          y si me <h2> enamoro </h2> sea de <h1> vos </h1>
          y que de tu <h1> voz </h1> sea este <h1>corazon</h1>
          {" "}
          <div class="botoncito b-radius"><a href="https://www.instagram.com/dago_456/"><i
                                                class="fa-brands fa-instagram"></i> Instagram</a></div>
          </p>
      </main>
    </div>
  )
}
