import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

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
  return (
    <>
      <div className="hero hero--primary" style={{height:"25rem"}}>
        <div className="container">
          <h1 className="hero__title">您的下一行未必是代码</h1>
          <p className="hero__subtitle">用rxDrag，可以构建属于自己的低代码系统</p>
          <div>
            <button className="button button--secondary button--lg">快速开始</button>
          </div>
        </div>
      </div>
      <main>
        <HomepageFeatures />
      </main>
    </>
  );
}
