import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import styles from '../styles/Home.module.css'
import headerStyles from '../styles/Header.module.css'
import { withRouter } from 'next/router'
import { Element, Link } from 'react-scroll';
import { motion } from "framer-motion";

function Home({router}) {
  return (
    <motion.div
      layoutId="home"
      className={styles.fullbody_home}
      initial={{ 
        backgroundPosition: "left bottom",
        backgroundColor: '#272626',
        backgroundSize: '200% 100%',
        scale: '100%'
      }}
    >
      <Head>
        <title>[K  A  R  I  M]  [S  A  L  E  H]</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Element name="top" />
      <motion.section layoutId="header" className={styles.section}>
        <Header styles={headerStyles} currentPath={router.pathname} />
      </motion.section>
      <section className={styles.top}>
        <div className={styles.container}>
          <main className={styles.main}>
            <div className={styles.intro_holder}>
            </div>
            <motion.div
              className={styles.intro}
              initial={{
                left: 0,
              }}
              // animate={{
              //   right: 0,
              //   left: 'inherit',
              // }}
              transition={{
                delay: .4
              }}
            >
              <h1
                className={styles.title}
              >
                  Karim
              </h1>
              <p>
                Advocate for a shoeless world &ndash; I&apos;m an endless wonderer who derives joy from noticing the unseen.
              </p>
            </motion.div>
            <div className={styles.karim_image}>
              <Image src='/images/karim.png' width="505px" height="667px" />
            </div>
            <div className={styles.get_in_touch}>
              <Link className="scrollLink" to="contact" smooth>
                <div className={styles.circle}>Get In Touch</div>
              </Link>
              <div className={styles.social_links}>
                <a target="_blank" href="http://instagram.com/karimsaleh">Insta</a><br />
                <a target="_blank" href="https://open.spotify.com/user/karimsaleh888888?si=ccd71f9edfe14315">Spotify</a><br />
                <a href="#">LinkedIn</a>
              </div>
            </div>
          </main>
        </div>
        <div className={styles.scroll}>
          <Link className="scrollLink" to="body" smooth={true}>
            <Image src='/images/scroll-vector.png' width="42px" height="40px" />
          </Link>
        </div>
      </section>
      <Element name="body" />
      <section className={styles.section}>
        <div className={styles.container}>
            <h2>About Karim</h2>          
          <div className={`${styles.card} ${styles.cardLeft}`}>
            <Image src='/images/image-design.jpg' width="662px" height="417px" />
            <div className={styles.cardCopy}>
              <div className={styles.cardTitles}>
                <h1 className={styles.cardTitle}>
                  Design
                </h1>
                <h3 className={styles.cardTitleSubText}>
                  I don't believe<br/>in bandaids
                </h3>
              </div>
              <p>
                My community knows me as someone who will ask the right questions. I design because I believe all things are capable of growth if you nurture the root of the issue, instead of avoiding it.  
              </p>
            </div>
          </div>
          <div className={`${styles.card} ${styles.cardRight}`}>
            <Image src='/images/image-values.jpg' width="662px" height="417px" />
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
          <div className={`${styles.card} ${styles.cardLeft}`}>
            <Image src='/images/image-music.jpg' width="662px" height="417px" />
            <div className={styles.cardCopy}>
              <div className={styles.cardTitles}>
                <h1 className={styles.cardTitle}>
                  Music
                </h1>
                <h3 className={styles.cardTitleSubText}>
                  The 6th love<br/>language
                </h3>
              </div>
              <p>
                I start every morning by sending 1 song to someone I love. Having worked in music for 5 years,
                I’ve traveled the world and been shaped by musicians who truly inspire me. 
              </p>
              <p>
                I love hosting cozy shows and helping emerging musicians connect with wide eyed newcomers. 
              </p>
            </div>
          </div>
          <div className={`${styles.card} ${styles.cardRight}`}>
            <Image src='/images/image-antics.jpg' width="662px" height="417px" />
            <div className={styles.cardCopy}>
              <div className={styles.cardTitles}>
                <h1 className={styles.cardTitle}>
                  Antics
                </h1>
                <h3 className={styles.cardTitleSubText}>
                  I climb<br/>things
                </h3>
              </div>
                <p>
                  I wish showering in mud was more socially acceptable. Rock climbing has taught me that in order to move on, you need to let go.
                  My life goal is to conquer the biggest mountains and jump off all the waterfalls.
                </p>
                <p>
                  And when I’m not scaring my mom half to death, you can find me behind the camera or around the campfire with a guitar.
                </p>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <h2>Skills</h2>
          <div className={styles.skills}>
            <h3>Design Things</h3>
              <div className={styles.skillsContainer}>
                <div>UX Design</div>
                <div>Business Analysis</div>
                <div>Client Relations</div>
                <div>Product Design</div>
                <div>UX Research</div>
                <div>Visual Branding</div>
              </div>
            <h3>Human Things</h3>
            <div className={styles.skillsContainer}>
              <div>Team Leadership</div>
              <div>Community Building</div>
              <div>Storytelling</div>
              <div>Collaboration</div>
              <div>Public Speaking</div>
              <div>Craigslist Haggling</div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Tools</h2>
          <div className={styles.tools}>
            <div className={styles.tool}>
              <span>Figma</span>
              <img src="/images/figma.png" alt="figma" />
            </div>
            <div className={styles.tool}>
              <span>Miro</span>
              <img src="/images/miro.png" alt="miro" />
            </div>
            <div className={styles.tool}>
              <span>XD</span>
              <img src="/images/xd.png" alt="XD" />
            </div>
            <div className={styles.tool}>
              <span>After Effects</span>
              <img src="/images/after-effects.png" alt="After Effects" />
            </div>
            <div className={styles.tool}>
              <span>Whimsical</span>
              <img src="/images/whimsical.png" alt="Whimsical" />
            </div>
            <div className={styles.tool}>
              <span>Sketch</span>
              <img src="/images/sketch.png" alt="sketch" />
            </div>
            <div className={styles.tool}>
              <span>ClickUp</span>
              <img src="/images/clickup.png" alt="ClickUp" />
            </div>
            <div className={styles.tool}>
              <span>HTML</span>
              <img src="/images/html.png" alt="HTML" />
            </div>
            <div className={styles.tool}>
              <span>CSS</span>
              <img src="/images/css.png" alt="css" />
            </div>
            <div className={styles.tool}>
              <span>JavaScript</span>
              <img src="/images/javascript.png" alt="javascript" />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Experience</h2>
          <div className={styles.experiences}>
            <div className={styles.experience}>
              <div>
                <h3 className="dates">2020 - Current</h3>
                <div className={styles.jobTitle}>
                  <h1 className="title">UX/UI Designer</h1>
                  <div className={styles.icon}>
                    <img src="/images/bulb-icon.png" className="icon" />
                    <span className={styles.companyName}>Freelance</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.experience}>
              <div>
                <h3 className="dates">2020</h3>
                <div className={styles.jobTitle}>
                  <h1 className="title">Creative Producer</h1>
                  <div className={styles.icon}>
                    <img src="/images/imprint-icon.png" className="icon" />
                    <span className={styles.companyName}>Imprint Projects</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.experience}>
              <div>
                <h3 className="dates">2017 - 2020</h3>
                <div className={styles.jobTitle}>
                  <h1 className="title">Director - San Francisco</h1>
                  <div className={styles.icon}>
                    <img src="/images/sofar-icon.png" className="icon" />
                    <span className={styles.companyName}>Sofar Sounds</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.experience}>
              <div>
                <h3 className="dates">2016 - 2017</h3>
                <div className={styles.jobTitle}>
                  <h1 className="title">Artist Relations Director</h1>
                  <div className={styles.icon}>
                    <img src="/images/sofar-icon.png" className="icon" />
                    <span className={styles.companyName}>Sofar Sounds</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.experience}>
              <div>
                <h3 className="dates">2016 - 2017</h3>
                <div className={styles.jobTitle}>
                  <h1 className="title">Account Manager</h1>
                  <div className={styles.icon}>
                    <img src="/images/airbnb-icon.png" className="icon" />
                    <span className={styles.companyName}>Airbnb</span>
                  </div>
                </div>
              </div>
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
          <img src="/images/rewind.png" className={styles.rewind} />
        </Link>
      </footer> 
    </motion.div>
  )
}

export default withRouter(Home);