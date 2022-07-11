import React from 'react'
import Image from 'next/image'
import styles from './Card.module.css'
import { Router, useRouter } from 'next/router'

export default function Card({name, phone, email, image, id}) {
    const router = useRouter()
  return (
    <div className={styles.card} onClick={() => router.push(`/cats/${id}`)}>
      <div className={styles["card-header"]}>
          <picture>
            <img src={image.url} alt={image.alt} className={styles["card-img"]} />
          </picture>
      </div>
      <div>
          <h3>{name}</h3>
          <h3>{phone}</h3>
          <h3>{email}</h3>
      </div>
    </div>
  )
}
