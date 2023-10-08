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
      <meta name='description' content='Infinite Void' />
    </Head>
    <Hero heading='I.V.' message='Collaborative designs' />
    <About />
    <Projects />
    </div>
  );
}
