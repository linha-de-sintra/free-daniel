import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return(
        <>
        <Head>
          <title>Situação do Daniel</title>
          <meta name="description" content="As condições a que são sujeitos os jovens inscritos na instituição" />
          <link rel="icon" href="/dani.bmp" />
        </Head>
        <main className={styles.main}>
        <h1 className={styles.title}>
          Situação do Daniel</h1>
</main>
        <p className={styles.description}>
          As condições a que são sujeitos os jovens inscritos na instituição
        </p>)
        <span className={styles.logo}>
            <Image src="/merda.jpg" alt="graffiti nas instalações" width={868} height={1156} />
            <footer />
            </span>
            

      <footer className={styles.footer}>
        <a
          href="https://www.youtube.com/channel/UCqK08_f7qp9xcaVyLleOvgg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Propriedade da Tropa da linha de sintra{' '}
          <span className={styles.logo}>
            <Image src="/bandeira_v2.png" alt="bandeira da tropa" width={133} height={75} />
          </span>
        </a>
      </footer>
    </>
  )
}