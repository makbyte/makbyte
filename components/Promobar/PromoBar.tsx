import React from 'react';
import styles from './PromoBar.module.css';

type PromoBar = {
  title: string
  description: string
}

const PromoBar: React.FC<PromoBar> = (props: PromoBar) => { 
  const { title, description } = props
  const message = `${title} : ${description}`

  return (
    <>
      <div className={styles.promoBar}>
        <div className={styles.scrollingText}>
          <p>{message}</p>
        </div>
      </div>
    </>
  )
}

export { PromoBar }
