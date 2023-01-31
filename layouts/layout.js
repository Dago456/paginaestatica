import Head from 'next/head'
import React, { Children, title } from 'react'
import { Navbar } from '../containers/contentContainers'

export const layout = () => {
  return (
    <>
    <Head>
        <title>Venta Musica</title>
        <meta name="author" content="Dago"/>
        <meta name="description" content="infomacion sobre: nirvana ${title}"/>
        <meta name="keywords" content="${title}, nirvana, kurt cobain, rock"/>
    </Head>
    <Navbar/>

    <main style={{
      padding: '0px 20px'
      
    }}>
         {Children}
    </main>

    </> )
}
