import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures/HomepageFeatures';
import HomepageSlider from '../components/HomepageSlider';
import FooterAvatar from '../components/FooterAvatar';
import Head from "@docusaurus/Head"
import HomeCarousel from '../components/HomeCarousel';
import HomeNavBar from '../components/HomeNavBar';

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
        <title> 一款开源低代码平台， 全栈、可定制 | {siteTitle}</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description"
          content='一款免费、开源、可定制的低代码平台，基于typescript生态(Recat, nod.js, Nestjs, TypeORM)构建。'
        />
        <meta
          name="keywords"
          content='rxdrag, 低代码'
        />
        <link rel='shortcut icon' type='image/x-icon' href={siteConfig.favicon} />
      </Head>
        <HomepageSlider />
        <HomeCarousel />
        <HomepageFeatures />
      
      <FooterAvatar />
    </>
  );
}
