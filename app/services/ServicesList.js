"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../services.module.css";

export default function ServicesList({ clinicServices, serviceSeo }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Facials & Glow", "Laser & Light", "PRP & Injectables", "Advanced Skin Care"];

  const filteredServices = activeCategory === "All"
    ? clinicServices
    : clinicServices.filter((s) => s.category === activeCategory);

  return (
    <section className={styles.servicesListSection}>
      <div className={styles.container}>
        {/* Category Tabs */}
        <div className={styles.categoryTabs}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`${styles.tabButton} ${activeCategory === cat ? styles.active : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Condensed Cards */}
        <div className={styles.servicesGrid}>
          {filteredServices.map((service) => {
            const seo = serviceSeo[service.slug] || {};
            return (
              <div key={service.slug} className={styles.serviceCard} id={service.slug}>
                <div className={styles.cardImageWrap}>
                  <Image
                    src={service.image}
                    alt={service.alt || `${service.name} treatment at Infinity Aesthetics Ajmer`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.cardCategory}>{service.category}</span>
                  <h2 className={styles.cardTitle}>{seo.h1 || service.name}</h2>
                  <p className={styles.cardDesc}>{service.description}</p>
                  
                  <div className={styles.cardMeta}>
                    <div className={styles.cardMetaItem}>
                      <strong>Duration</strong>
                      <span>{service.duration}</span>
                    </div>
                    <div className={styles.cardMetaItem}>
                      <strong>Recovery</strong>
                      <span>{service.recovery}</span>
                    </div>
                  </div>

                  <Link href={`/services/${service.slug}`} className={styles.cardLink}>
                    Learn About {service.name}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
