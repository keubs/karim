import Head from 'next/head';
import { withRouter } from 'next/router'
import Header from '../components/header';
import styles from '../styles/Work.module.css'
import headerStyles from '../styles/Header.module.css'
import { motion } from "framer-motion";
const Work = ({router}) => {
  return (
    <motion.div
      layoutId="home"
      className={styles.fullbody_work}
    >
      <Head>
        <title>[K  A  R  I  M]  [S  A  L  E  H]</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.section
        layoutId="header"
        className={styles.section}
        animate={{color: 'black'}}
      >
        <Header styles={headerStyles} currentPath={router.pathname} />
      </motion.section>
      <section className={styles.top}>
        <div className={styles.container}>
          <main className={styles.main}>
            <div className={styles.intro}>
              <motion.h1
                className={styles.title}
                layoutId="title"
                initial={{color: 'white'}}
                animate={{marginLeft: '500px', color: 'black'}}
                transition={{duration: 1}}
              >
                Karim
              </motion.h1>
            </div>
            {/* <Image src='/images/karim.png' width="470px" height="601px" /> */}
            <div className={styles.get_in_touch}>
              <a className="scrollLink" href="mailto:test@Test.com">
                <div className={styles.circle}>Get In Touch</div>
              </a>
            </div>
          </main>
        </div>
      </section>
    </motion.div>
  );
};

export default withRouter(Work);