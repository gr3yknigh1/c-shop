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
      <header>
        <h1>C Shop</h1>
        <nav></nav>
      </header>
      <main>
        <section>
          <div>Hi hi there</div>
          <PlaceholderImage width={100} height={100} />
        </section>
      </main>
      <footer>
        <address>
          <a href="mailto:feedback@cshop.com">feedback@cshop.com</a>
          <a href="tel:+88888888888">+8 (888) 888 88 88</a>
        </address>
      </footer>
    </div>
  );
};

export default Index;
