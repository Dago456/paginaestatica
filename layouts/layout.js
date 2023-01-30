import Head from 'next/head'
import React, { Children, title } from 'react'

export const layout = () => {
  return (
    <>
    <Head>
        <title>Venta Musica</title>
        <meta name="author" content="Dago"/>
        <meta name="description" content="infomacion sobre: nirvana ${title}"/>
        <meta name="keywords" content="${title}, nirvana, kurt cobain, rock"/>
    </Head>
    /*navbar*/
    <main>
         {Children}
    </main>

    </> )
}
