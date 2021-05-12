import Head from 'next/head'
import { withRouter } from 'next/router'
import Header from '../../components/header'
import Image from 'next/image'
import styles from '../../styles/Work.module.css'
import headerStyles from '../../styles/Header.module.css'
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
  const firstCard = [240, 1040];
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
        <title>|w o r k| [K  A  R  I  M]</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
    </motion.div>
  );
};

export default withRouter(Work);