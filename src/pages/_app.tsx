import '@/styles/globals.css'
import { Jost } from 'next/font/google'
import type { AppProps } from 'next/app'

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${jost.variable} font-jost`}>
     <Component {...pageProps} />
     </main>
  )
}
