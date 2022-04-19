import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("../../static/img/Group 14.svg").default,
    description: (
      <>
        Packages & APIs were designed from the ground up to be simple, and free.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("../../static/img/Frame 1@1x.svg").default,
    description: (
      <>
		Call a function or make a HTTP request and let the packages and/or APIs take care of everything else
      </>
    ),
  },
  {
    title: "Powered by Node",
    Svg: require("../../static/img/node2.svg").default,
    description: (
      <>
        All of the packages & APIs are powered by NodeJS
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
