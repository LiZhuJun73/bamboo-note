import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="放置前端筆記、日語筆記，以及偶爾的生活分享的個人空間。"
    >
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
