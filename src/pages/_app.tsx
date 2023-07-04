import '@/styles/globals.css'
import { Jost } from 'next/font/google'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <main className={`${jost.variable} font-jost w-full min-h-screen`}>
     <Component {...pageProps} />
     </main>
     </>
  )
}
