import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { myDarkTheme } from '@/themes';
import { NextUIProvider } from '@nextui-org/react';



export default function App({ Component, pageProps }: AppProps) {
  return  (
<NextUIProvider theme={myDarkTheme}>
<Component {...pageProps} />
</NextUIProvider>

  )

}

