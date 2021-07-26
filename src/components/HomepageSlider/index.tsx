import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import React from "react";
import HomeNavBar from "../HomeNavBar";
import styles from "./styles.module.css";
import "./style.css";

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
        <div className={clsx("container")}>
          <h1 className="hero__title">您的下一行未必是代码</h1>
          <p className="hero__subtitle">rxDrag，一款全栈低代码平台，基于TypeScript生态构建
          </p>
          <p className="hero__subtitle"> 
           开源、免费，拼插式生态链，可以定制专属自己的低代码
          </p>
          <div className="start-button">
            <a className="button button--info button--outline button--lg margin-right--xs shadow--tl" href="/docs/intro">快速开始</a>
            <a className="button button--warning button--lg margin-left--xs shadow--tl" href="#url">视频演示</a>
          </div>
        </div>
      </div>
  </section>
  )
}