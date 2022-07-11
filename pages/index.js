import Head from 'next/head'
import Jumbotron from '../components/Jumbotron/Jumbotron'
import DefaultLayout from '../layouts/Default'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CATastrophe</title>
        <meta name="description" content="Adopt a cat companion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultLayout>
        <Jumbotron />
      </DefaultLayout>
    </div>
  )
}
