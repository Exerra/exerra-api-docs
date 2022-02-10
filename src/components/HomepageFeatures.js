import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("../../static/img/Group 14.svg").default,
    description: (
      <>
        The Exerra API was designed from the ground up to be simple, and free.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("../../static/img/Frame 1@1x.svg").default,
    description: (
      <>
        Using a lot of complicated magic, the Exerra API let's you write as less code as possible. Instead of making these crazy scripts, everything is just one REST call away!
      </>
    ),
  },
  {
    title: "Powered by Node",
    Svg: require("../../static/img/node2.svg").default,
    description: (
      <>
        The entire API is powered by NodeJS giving it the power needed for all of this.
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
