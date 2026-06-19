import styles from "../app/page.module.css";

export default function PageHero({ kicker, title, text }) {
  return (
    <section className={styles.pageHero}>
      {kicker ? <p className={styles.kicker}>{kicker}</p> : null}
      <h1 className={styles.pageHeroTitle}>{title}</h1>
      {text ? <p className={styles.pageHeroText}>{text}</p> : null}
    </section>
  );
}
