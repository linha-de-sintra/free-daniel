import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Libertem o Daniel!</title>
        <meta name="description" content="Junta-te à causa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Libertem o <a href="https://www.youtube.com/channel/UCd3p_H-3jjPNc-sd_M2hf6w">Daniel!</a>
        </h1>

        <p className={styles.description}>
          O Daniel encontra-se encarcerado no estabelecimento prisional de Caxias!
        </p>

        <div className={styles.grid}>
          <a href="https://freedaniel.pt/historia" className={styles.card}>
            <h2>Situação &rarr;</h2>
            <p>Vem conhecer a situação em que se encontra o Daniel</p>
          </a>

          <a href="https://freedaniel.pt/sobre" className={styles.card}>
            <h2>Sobre o Daniel &rarr;</h2>
            <p>História do Daniel</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Discord &rarr;</h2>
            <p>Discord de apoio à causa</p>
          </a>

          <a
            href="https://www.paypal.com/paypalme/asdosflippers"
            className={styles.card}
          >
            <h2>Doações &rarr;</h2>
            <p>
              Junta-te à causa e apoia o Daniel!
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.youtube.com/channel/UCd3p_H-3jjPNc-sd_M2hf6w"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/bandeira_v2.png" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
