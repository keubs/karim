import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import styles from '../styles/Home.module.css'
// import headerStyles from '../styles/Header.modules.css';
import { withRouter } from 'next/router'
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'

function Home({router}) {
  return (
    <Fullpage>
      <Head>
        <title>[K  A  R  I  M]  [S  A  L  E  H]</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FullPageSections>
        <FullpageSection styles={{height: '100vh', backgroundColor: '#272626'}}>
          <section className={styles.section}>
            <div className={styles.container}>
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
                    <a href="mailto:karimsaleh-design@gmail.com">
                      <div className={styles.circle}>Get In Touch</div>
                    </a>
                  </div>
              </main>
            </div>
          </section>
        </FullpageSection>
        <FullpageSection styles={{height: '120vh', backgroundColor: 'red'}}>
        <section className={styles.section}>
          <div className={styles.container}>
            <h2>About Karim</h2>
            <div className={styles.cardLeft}>
              <Image src='/images/image-design.png' width="662px" height="417px" />
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
            <div className={styles.cardLeft}>
              <Image src='/images/image-music.png' width="662px" height="417px" />
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
          </div>
        </section>
        </FullpageSection>
      </FullPageSections>
      <footer className={styles.footer} />
    </Fullpage>
  )
}

export default withRouter(Home);