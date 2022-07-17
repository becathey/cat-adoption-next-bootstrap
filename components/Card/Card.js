import React from 'react'
import Image from 'next/image'
import styles from './Card.module.css'
import { Router, useRouter } from 'next/router'

export default function Card({name, breed, personality, image, id}) {
    const router = useRouter()
  return (
    <div className={styles.card} onClick={() => router.push(`/cats/${id}`)}>
      <div className={styles["card-header"]}>
          <picture>
            <img src={image.url} alt={image.alt} className={styles["card-img"]} />
          </picture>
      </div>
      <div>
          <h4>{name}</h4>
          <h5>{breed}</h5>
          <h6>{personality}</h6>
      </div>
    </div>
  )
}
