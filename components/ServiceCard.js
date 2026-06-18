import Image from "next/image";
import styles from "../app/page.module.css";

export default function ServiceCard({ title, text, icon, image, alt }) {
  return (
    <article className={styles.serviceCard}>
      <div className={styles.serviceImageWrap}>
        <Image
          className={styles.serviceImage}
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1040px) 45vw, 240px"
        />
      </div>
      <div className={styles.serviceBody}>
        <div className={styles.serviceIcon} aria-hidden="true">
          {icon}
        </div>
        <h3 className={styles.serviceTitle}>{title}</h3>
        <p className={styles.serviceText}>{text}</p>
      </div>
    </article>
  );
}
