import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return(
        <>
        <Head>
          <title>História</title>
          <meta name="description" content="História de Daniel" />
          <link rel="icon" href="/dani.bmp" />
        </Head>
        <main className={styles.main}>
        <h1 className={styles.title}>
          História do Daniel</h1>
</main>
        <p className={styles.description}>
         A vida quotidiana de Daniel
        </p>)
        <a>Daniel tem 15 anos e habitava em São João da madeira.
            Decidiu não se identificar perante o publico, mas deixou esta foto em que é possivel ver a sua turma
        </a>
        <span className={styles.logo}>
            <Image src="/daniel.png" alt="graffiti nas instalações" width={575} height={337} />
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
