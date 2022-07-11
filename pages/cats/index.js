import React, { useState, useEffect } from 'react'
import Card from '../../components/Card/Card'
import DefaultLayout from '../../layouts/Default'

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
        <DefaultLayout>
        <div className='container mt-5'>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {cats.map(cat => (
                    <Card
                        name={cat.name}
                        id={cat.id}
                        key={cat.id}
                        phone={cat.phone}
                        email={cat.email}
                        image={cat.image}
                    />
                ))}
            </div>
        </div>
        </DefaultLayout>
      </>
  )
}
