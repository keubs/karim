import Head from 'next/head'
import { withRouter } from 'next/router'
import Header from '../components/header'
import Image from 'next/image'
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
            <div className={styles.intro_holder}>
            </div>
            <motion.div
                layoutId="intro"
                className={styles.intro}
                initial={{
                  left: 0,
                }}
                animate={{
                  left: 700,
                  // left: 'inherit',
                }}
                transition={{
                  duration: 1
                }}
              >
                <h1
                  className={styles.title}
                >
                    Karim
                </h1>
                <p>
                  Currently at the intersection of music &amp; the economy. Exploring blockchain solutions in shared ownership as a tool to drive patron engagement.  
                </p>
              </motion.div>
            {/* <Image src='/images/karim.png' width="470px" height="601px" /> */}
            <div className={styles.get_in_touch}>
              <a className="scrollLink" href="mailto:test@Test.com">
                <div className={styles.circle}>Get In Touch</div>
              </a>
            </div>
          </main>
        </div>
      </section>
      <section className={styles.section}>
      <div className={styles.container}>
            <h2>Selected Work</h2>          
            <div className={styles.cardLeft}>
              <Image src='/images/controlhub_work.png' width="662px" height="417px" />
              <div className={styles.cardCopy}>
                <div className={styles.cardTitles}>
                  <h1 className={styles.cardTitle}>
                    ControlHub
                  </h1>
                  <h3 className={styles.cardTitleSubText}>
                    Who said accounting can’t be fun?
                  </h3>
                </div>
              </div>
            </div>
            <div className={styles.cardRight}>
              <Image src='/images/image-values.png' width="662px" height="417px" />
              <div className={styles.cardCopy}>
                <div className={styles.cardTitles}>
                  <h1 className={styles.cardTitle}>
                    Values
                  </h1>
                  <h3 className={styles.cardTitleSubText}>
                    Social<br/>Currency
                  </h3>
                </div>
                  <p>
                    My eneagram says I’m a challenger type. I raise myself and my community through: 
                  </p>
                  <ul>
                    <li>Strong Commmunication</li> 
                    <li>Transparency </li> 
                    <li>Vulberabilty</li> 
                    <li>Support</li>
                  </ul>
              </div>
            </div>
          </div>
      </section>
    </motion.div>
  );
};

export default withRouter(Work);