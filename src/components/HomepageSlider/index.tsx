import clsx from "clsx";
import React from "react";
import styles from './HomepageSlider.module.css';

export default function  HomepageSlider(props:{}){
  return (
    <section className={clsx(styles.slider)}>
      <div className = {styles.sliderMask}></div>
      <div className="container">
        <nav className={clsx("navbar", styles.navbar)} style={{boxShadow:'none'}}>
          <div className="navbar__inner">
            <div className="navbar__items">
              <a className="navbar__brand">rxDrag.</a>
              <a className="navbar__item navbar__link" href="#url">
                Docs
              </a>
              <a className="navbar__item navbar__link" href="#url">
                Tutorial
              </a>
              <div className="navbar__item dropdown dropdown--hoverable">
                <a className="navbar__link" href="#url">
                  v2.0
                </a>
                <ul className="dropdown__menu">
                  <li>
                    <a className="dropdown__link" href="#url">
                      v1.8.0
                    </a>
                  </li>
                  <li>
                    <a className="dropdown__link" href="#url">
                      v1.7.0
                    </a>
                  </li>
                  <li>
                    <a className="dropdown__link" href="#url">
                      v1.6.0
                    </a>
                  </li>
                  <li>
                    <a className="dropdown__link" href="#url">
                      All Versions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navbar__items navbar__items--right">
              <form>
                <div className="navbar__search">
                  <input className="navbar__search-input" placeholder="Search" />
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div className={clsx("hero", styles.heroSlider)} style={{height:"30rem"}}>
      <div className="container">
        <h1 className="hero__title">您的下一行未必是代码</h1>
        <p className="hero__subtitle">用rxDrag，可以构建属于自己的低代码系统</p>
        <div>
          <button className="button button--secondary button--lg">快速开始</button>
        </div>
      </div>
      </div>
  </section>
  )
}