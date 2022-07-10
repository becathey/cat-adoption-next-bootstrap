import React from 'react'
import Image from 'next/image'
import styles from './Card.module.css'

export default function Card({name, phone, email, image, id}) {
  return (
    <div className={styles.card}>
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
