import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import React from "react";
import HomeNavBar from "../HomeNavBar";
import styles from './styles.module.css';

export default function  HomepageSlider(props:{}){
  const {
    siteConfig: {
      themeConfig: {
        navbar: { items },
      },
    },
  } = useDocusaurusContext()
  return (
    <section className={clsx(styles.slider)}>
      <HomeNavBar />
      <div className={clsx("hero", styles.heroSlider)} style={{height:"30rem"}}>
        <div className="container">
          <div className = {styles.sliderMask}></div>
          <h1 className="hero__title">您的下一行未必是代码</h1>
          <p className="hero__subtitle">用rxDrag，定制属于自己的低代码平台</p>
          <div>
            <button className="button button--secondary button--lg">快速开始</button>
          </div>
        </div>
      </div>
  </section>
  )
}