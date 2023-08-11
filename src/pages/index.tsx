import Hero from '@/components/hero';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Projects from '@/components/projects';
import About from '@/components/about';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <title>Infinite Void Design</title>
      <meta name='description' content='Infinite Solutions' />
    </Head>
    <Hero heading='I.V.D.' message='Infinite Solutions' />
    <About />
    <Projects />
    </div>
  );
}
