import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title></title>
      <meta></meta>
      <meta></meta>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <main className='bg-black'>
      Home
    </main>
    </>
  )
}
