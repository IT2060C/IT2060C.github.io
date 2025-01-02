/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface FeatureItem {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
}

const FeatureList: FeatureItem[] = [
  {
    Svg: require(`@site/static/img/undraw_docusaurus_mountain.svg`).default,
    description:
  <>
    We'll learn about protecting and securing users' information on computer systems
  </>,
    title: `Security`,
  },
  {
    Svg: require(`@site/static/img/undraw_docusaurus_tree.svg`).default,
    description:
  <>
    We'll learn to use the command line interface for system administration
  </>,
    title: `CLI`,
  },
  {
    Svg: require(`@site/static/img/undraw_docusaurus_react.svg`).default,
    description:
  <>
    We'll learn how to install and manage disks and file systems
  </>,
    title: `Filesystem`,
  },
];

function Feature({ Svg, description, title }: FeatureItem) {
  return (
    <div className={clsx(`col col--4`)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) =>
            <Feature key={idx} {...props} />)}
        </div>
      </div>
    </section>
  );
}
