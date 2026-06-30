import Image from "next/image";
import Link from "next/link";
import styles from "../app/page.module.css";

export default function ServiceCard({ title, text, icon, image, alt, slug, category }) {
  return (
    <article className={styles.serviceCard}>
      <div className={styles.serviceImageWrap}>
        <Image
          className={styles.serviceImage}
          src={image}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 640px) 100vw, (max-width: 1040px) 45vw, 240px"
        />
      </div>
      <div className={styles.serviceBody}>
        <div className={styles.serviceIcon} aria-hidden="true">
          {icon}
        </div>
        {category ? <p className={styles.serviceCategory}>{category}</p> : null}
        <h3 className={styles.serviceTitle}>{title}</h3>
        <p className={styles.serviceText}>{text}</p>
        {slug ? (
          <Link className={styles.serviceLink} href={`/services/${slug}`}>
            View treatment
          </Link>
        ) : null}
      </div>
    </article>
  );
}
