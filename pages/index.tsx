import React from "react";
import styles from "@styles/Index.module.scss";
import Head from "next/head";
import type { NextPage } from "next";
import { PlaceholderImage } from "@/common/placeholders";

const Index: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>C Shop</title>
        <meta name="description" content="Awesome cloth shop" />;
      </Head>

      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <PlaceholderImage width={64} />
        </div>
        <div className={styles.menuBar}>
          <div className={styles.menuItem}>MenuItem1</div>
          <div className={styles.menuItem}>MenuItem2</div>
          <div className={styles.menuItem}>MenuItem3</div>
          <div className={styles.menuItem}>MenuItem4</div>
          <div className={styles.menuItem}>MenuItem5</div>
        </div>
      </header>

      <main className={styles.content}>
        <section className={styles.offerSection}>
          <div className="offerTile">
            <PlaceholderImage width={128}></PlaceholderImage>
          </div>
          <div className="offerTile">
            <PlaceholderImage width={128 * 2}></PlaceholderImage>
          </div>
          <div className="offerTile">
            <PlaceholderImage width={512} height={256}></PlaceholderImage>
          </div>
          <div className="offerTile">
            <PlaceholderImage width={128} height={64}></PlaceholderImage>
          </div>
          <div className="offerTile">
            <PlaceholderImage width={128 * 2}></PlaceholderImage>
          </div>
          <div className="offerTile">
            <PlaceholderImage width={128}></PlaceholderImage>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
};

export default Index;
