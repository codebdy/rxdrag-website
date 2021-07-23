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
        <div className="container">
          <div className = {styles.sliderMask}></div>
          <h1 className="hero__title">您的下一行未必是代码</h1>
          <p className="hero__subtitle">rxDrag，不需要代码就可以构建一个通用后端，基于ER图实现。
          </p>
          <p className="hero__subtitle"> 
            通过拖拽等可视化操作，构建零代码前端。
          </p>
          <div className="start-button">
            <a className="button button--secondary button--lg margin-right--xs" href="#url">快速入门</a>
            <a className="button button--warning button--lg margin-left--xs" href="#url">视频演示</a>
          </div>
        </div>
      </div>
  </section>
  )
}