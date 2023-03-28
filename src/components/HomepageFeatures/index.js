import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row home-box">
          <div className={clsx("col col--4 row home-text")}>
            <h1>Bamboo Note</h1>
            <h3>
              放置前端筆記、日語筆記，<br></br>以及偶爾的生活分享的個人空間
            </h3>
          </div>
          <div className={clsx("col col--8")}>
            <img src="img/0123.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
