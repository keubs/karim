import Head from 'next/head';
import { withRouter } from 'next/router'
import Header from '../components/header';
import styles from '../styles/Home.module.css'

const Work = ({router}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>[K  A  R  I  M ][ S  A  L  E  H]</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.container}>
            <Header styles={styles} currentPath={router.pathname} />
          </div>
        </section>
      </main>
    </div>
  )
};

export default withRouter(Work);