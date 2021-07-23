import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageSlider from '../components/HomepageSlider';
import FooterAvatar from '../components/FooterAvatar';
import Head from "@docusaurus/Head"

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const {
    title: siteTitle,
  } = siteConfig
  return (
    <>
      <Head>
        <title> rxDrag低代码平台 | {siteTitle}</title>
        <meta name="description"
          content='一个免费、开源、可定制的低代码平台，基于typescript生态构建。'
        />
        <meta
          name="keywords"
          content='rxdrag, 低代码'
        />
      </Head>
      <HomepageSlider />

      <main>
        <HomepageFeatures />
      </main>
      <FooterAvatar />
    </>
  );
}
