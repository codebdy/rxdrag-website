import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css"

export default function HomeNavBar(props:{}){
  const {
    siteConfig: {
      themeConfig: {
        navbar: { items },
      },
    },
  } = useDocusaurusContext()
  return(
    <nav className={clsx("navbar", styles.navbar)} style={{boxShadow:'none'}}>
          <div
            aria-label="Navigation bar toggle"
            className="navbar__toggle"
            role="button"
            tabIndex={0}
            //onClick={showSidebar}
            //onKeyDown={showSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              role="img"
              focusable="false"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M4 7h22M4 15h22M4 23h22"
              />
            </svg>
          </div>


      <div className="navbar__inner">
        <div className="navbar__items">
          <img className={styles.logo} src="img/logo.png" width="60px" />
          <a className={clsx("navbar__brand", styles.brand)}>rxDrag.</a>
          <a className="navbar__item navbar__link" href="#url">
            rxModels
          </a>
          <a className="navbar__item navbar__link" href="#url">
            rx生态圈
          </a>
          <a className="navbar__item navbar__link" href="#url">
            文章资源
          </a>
        </div>
        <div className="navbar__items navbar__items--right">
          <a className="navbar__item navbar__link" href="#url">
            <svg style={{width:'30px',height:'30px'}} viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
            </svg>
          </a>
        </div>
      </div>
      <div
        role="presentation"
        className="navbar-sidebar__backdrop"
      />
      <div className="navbar-sidebar">
        <div className="navbar-sidebar__brand">
          <a
            className={clsx("navbar__brand", styles.brandIcon)}
            href="/"
            
          >
            QuestDB
          </a>
        </div>
      </div>

    </nav>

  )
}