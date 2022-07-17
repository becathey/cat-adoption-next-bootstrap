import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Card from '../../components/Card/Card'
import DefaultLayout from '../../layouts/Default'
import styles from '../../styles/Home.module.css'

export default function Home() {
    const [cats, setCats] = useState([])
    const fetchCats = async () => {
        const response = await fetch('/api/cats')
        const data = await response.json()
        console.log(data)
        setCats(data)
    }
    useEffect(() => {
        fetchCats()
    }, [])
  return (
      <>
        <Head>
        <title>Our Cats</title>
        <meta name="description" content="Adopt a cat companion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <DefaultLayout>
        <div className='container mt-5'>
            <div className={styles['cards-container']}>
                {cats.map(cat => (
                    <Card
                        name={cat.name}
                        id={cat.id}
                        key={cat.id}
                        breed={cat.breed}
                        personality={cat.personality}
                        image={cat.image}
                    />
                ))}
            </div>
        </div>
        </DefaultLayout>
      </>
  )
}
