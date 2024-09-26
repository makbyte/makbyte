import React from "react";
import styles from "./PromoBar.module.css";
import Link from "next/link";

type PromoBar = {
  title: string;
  description: string;
};

const PromoBar: React.FC<PromoBar> = (props: PromoBar) => {
  const { title, description } = props;
  const message = `${title} : ${description}`;

  return (
    <>
      <Link href="/ai-services">
        <div className={styles.promoBar}>
          <div className={styles.scrollingText}>
            <p>{message}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export { PromoBar };
