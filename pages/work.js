import Head from 'next/head'
import NextLink from 'next/link';
import { withRouter } from 'next/router'
import Header from '../components/header'
import Image from 'next/image'
import styles from '../styles/Work.module.css'
import headerStyles from '../styles/Header.module.css'
import {   
  motion,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { Element, Link } from 'react-scroll';
const Work = ({router}) => {
  const { scrollY } = useViewportScroll();
  const textTransform = [-50, 50];
  const cardTransform = [-50, 0];
  const firstCard = [200, 1040];
  const secondCard = [870, 1670];
  const thirdCard = [1470, 2270];

  const y1_1 = useTransform(scrollY, firstCard, textTransform);
  const y2_1 = useTransform(scrollY, firstCard, cardTransform);
  const y1_2 = useTransform(scrollY, secondCard, textTransform);
  const y2_2 = useTransform(scrollY, secondCard, cardTransform);
  const y1_3 = useTransform(scrollY, thirdCard, textTransform);
  const y2_3 = useTransform(scrollY, thirdCard, cardTransform);
  

  return (
    <motion.div
      layoutId="home"
      className={styles.fullbody_work}
    >
      <div className={styles.overlay_bg}></div>
      <Head>
        <title>|w o r k - K  A  R  I  M]</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Element name="top" />
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
                }}
                transition={{
                  duration: 1,
                }}
              >
                <h1
                  className={styles.title}
                >
                    Karim
                </h1>
                <p>
                  Currently at the intersection of music &amp; the economy.
                  Exploring blockchain solutions in shared ownership as a tool to drive patron engagement.  
                </p>
              </motion.div>
            <div className={styles.get_in_touch}>
              <Link className="scrollLink" to="contact" smooth>
                  <div className={styles.circle}>Get In Touch</div>
              </Link>
            </div>
          </main>
        </div>
        <div className={styles.scroll}>
          <Link className="scrollLink" to="body" smooth={true}>
            <Image src='/images/scroll-vector-light.png' width="42px" height="40px" />
          </Link>
        </div>
      </section>
      <section id="work" className={styles.section}>
        <div className={styles.container}>
          <Element name="body" />
          <h2>Selected Work</h2>
          <NextLink href="/studies/control-hub">
            <div id="card0" className={`${styles.cardRight} ${styles.link}`}>
              <motion.div
                style={{ y: y2_1 }}
              >
                <Image
                  src='/images/controlhub_work.png' 
                  width="662px"
                  height="417px"
                />
              </motion.div>
              <div id="card1" className={styles.cardCopy}>
                <motion.div
                  style={{ y: y1_1, }}
                  className={styles.cardTitles}>
                  <h1
                    className={styles.cardTitle}
                  >
                    ControlHub
                  </h1>
                  <h3
                    className={styles.cardTitleSubText}>
                    Who said accounting can’t be fun?
                  </h3>
                  <span className={styles.view_study_link}>View Case Study</span>
                </motion.div>
              </div>
              <div className={styles.number}>
                <h1>
                  #1
                </h1>
              </div>
            </div>
          </NextLink>       
          <div id="card2" className={styles.cardLeft}>
            <motion.div
              style={{y: y2_2}}
            >
              <Image
                src='/images/electric-dusk_work.png'
                width="662px"
                height="417px"
              />
            </motion.div>
            <div id="card3" className={styles.cardCopy}>
              <motion.div
                style={{ y: y1_2, }}
                className={styles.cardTitles}>
              <h1
                  className={styles.cardTitle}
                >
                  Electric Dusk
                </h1>
                <h3
                  className={styles.cardTitleSubText}>
                  Drive in movies, a new generation
                </h3>
                <span className={styles.view_study_link}>View Case Study</span>
              </motion.div>
            </div>
            <div className={styles.number}>
              <h1>
                #2
              </h1>
            </div>
          </div>
          <div id="card4" className={styles.cardRight}>
            <motion.div
              style={{y: y2_3}}
            >
              <Image
                src='/images/controlhub_work.png' 
                width="662px"
                height="417px"
              />
            </motion.div>
            <div id="card5" className={styles.cardCopy}>
              <motion.div
                style={{ y: y1_3, }}
                className={styles.cardTitles}>
              <h1
                  className={styles.cardTitle}
                >
                  Vezt
                </h1>
                <h3
                  className={styles.cardTitleSubText}>
                  Own shares of your favorite song
                </h3>
                <span className={styles.view_study_link}>View Case Study</span>
              </motion.div>
            </div>
            <div className={styles.number}>
              <h1>
                #3
              </h1>
            </div>
          </div>
        </div>
      </section>
      <Element name="contact" />
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Contact</h2>
          <div className={styles.contact}>
            <h3>I'M THE TYPE OF TEXTER WHO CALLS (but I send a mean email)</h3>
            <span className={styles.touch}>GET IN TOUCH</span>
            <div>
                <a target="_blank" href="http://instagram.com/karimsaleh">Insta</a><br />
                <a target="_blank" href="https://open.spotify.com/user/karimsaleh888888?si=ccd71f9edfe14315">Spotify</a><br />
                <a href="#">LinkdedIn</a>
              </div>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <Link className="scrollLink" to="top" smooth>
          <img src="/images/rewind-black.png" className={styles.rewind} />
        </Link>
      </footer> 
    </motion.div>
  );
};

export default withRouter(Work);