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
      </header>
      <main>
      </main>
      <footer>
      </footer>
    </div>
  );
};

export default Index;
