import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Worldtrip</title>
      </Head>
      
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
