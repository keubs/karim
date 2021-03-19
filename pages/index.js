import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import styles from '../styles/Home.module.css'
// import headerStyles from '../styles/Header.modules.css';
import { withRouter } from 'next/router'


function Home({router}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>[K  A  R  I  M]  [S  A  L  E  H]</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header styles={styles} currentPath={router.pathname} />
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1 className={styles.title}>
            Karim
          </h1>
          <p>
            Advocate for a shoeless world &ndash; I&apos;m an endless wonderer who derives joy from noticing the unseen.
          </p>
        </div>
        <Image src='/images/karim.png' width="470px" height="601px" />
        <div className={styles.get_in_touch}>
          karimsaleh-design@gmail.com
          <div className={styles.circle}>Get In Touch</div>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default withRouter(Home);