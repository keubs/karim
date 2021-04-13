import Head from 'next/head';
import { withRouter } from 'next/router'
import Header from '../components/header';
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion";
const Work = ({router}) => {
  return (
    <motion.div
      layoutId="home"
      className={styles.fullbody_work}
      initial={{ 
        backgroundPosition: "left bottom",
        backgroundColor: '#272626',
        backgroundSize: '200% 100%',
        scale: '100%'
      }}
      animate={{ backgroundColor: "#BAB5B5" }}
      transition={{
        duration: 0.25,
      }}
    >
      <Head>
        <title>[K  A  R  I  M]  [S  A  L  E  H]</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.section}>
        <Header styles={styles} currentPath={router.pathname} layoutId="header"/>
      </section>
      <section className={styles.top}>
        <div className={styles.container}>
          <main className={styles.main}>
            <div className={styles.intro}>
              <motion.h1
                className={styles.title}
                layoutId="title"
                initial={{color: 'white'}}
                animate={{marginLeft: '100px', color: 'black'}}
                transition={{duration: 0.3}}
              >
                Karim
              </motion.h1>
            </div>
          </main>
        </div>
      </section>
    </motion.div>
  );
};

export default withRouter(Work);