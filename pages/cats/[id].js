import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import DefaultLayout from '../../layouts/Default'

export default function Cat() {
    const [cat, setCat] = useState(null)
    const fetchCat = async () => {
        const response = await fetch(`/api/cats/${id}`)
        const data = await response.json()
        setCat(data)
    }
    useEffect(() => {
        fetchCat()
    },)
    const router = useRouter()
    const {id} = router.query
    return (
        <div>
            
            <DefaultLayout>
            {cat && (
            <>
            <Head>
            <title>{cat.name}</title>
            <meta name="description" content="Adopt a cat companion" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-12 col-lg-6 mb-3'>
                            <picture>
                                <img style={{width: '100%'}} src={cat.image.url} alt={cat.image.alt} />
                            </picture>
                        </div>
                    
                        <div className='col'>
                            <h1>{cat.name}</h1>
                            <p>{cat.description}</p>
                        </div>
                    </div>
                </div>
            </>
            )}
            </DefaultLayout>
        </div>
    )
}