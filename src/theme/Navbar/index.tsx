import React, { useCallback, useEffect, useState } from "react";
import NavSideBar from "../../components/NavSideBar";
import useWindowSize, { windowSizes } from "@theme/hooks/useWindowSize"
import useLockBodyScroll from "@theme/hooks/useLockBodyScroll"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { splitNavItemsByPosition } from "./splitNavItemsByPosition";
import styles from "./styles.module.css"
import clsx from "clsx";

export default function NavBar(props:{}){
  const [sidebarShown, setSidebarShown] = useState(false);
  const [sticky, setSticky] = React.useState(false);
  const {
    siteConfig: {
      themeConfig: {
        navbar: { logo, title, items },
      },
    },
  } = useDocusaurusContext();

  const showSidebar = useCallback(() => {
    setSidebarShown(true)
  }, []);
  const hideSidebar = useCallback(() => {
    setSidebarShown(false)
  }, []);

  const windowSize = useWindowSize();
  const { leftItems, rightItems } = splitNavItemsByPosition(items);
  useEffect(() => {
    if (windowSize === windowSizes.desktop) {
      setSidebarShown(false)
    }
  }, [windowSize]);

  const isDesktop = (windowSize === windowSizes.desktop);
  useLockBodyScroll(sidebarShown)

  return(
    <div className = {styles.shell}>
      <div className={clsx("container")}>
        <nav className={clsx("navbar", styles.navbar,  {
          "navbar-sidebar--show": sidebarShown,
        })} style={{boxShadow:'none'}}>
          <div
            aria-label="Navigation bar toggle"
            className="navbar__toggle"
            role="button"
            tabIndex={0}
            onClick={showSidebar}
            onKeyDown={showSidebar}
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


          <div className={clsx("navbar__inner", styles.inner)}>
            <div className={clsx("navbar__items", {[styles.mobile]:!isDesktop})}>
              <img className={styles.logo} src={logo.src} />
              <a className={clsx("navbar__brand", styles.brand)}>{title}</a>
              {
                leftItems.map((item, i) => (
                  <a key={item.to + i} className="navbar__item navbar__link" href={item.to}>
                  {item.label}
                </a>
                ))
              }
            </div>
            <div className="navbar__items navbar__items--right">
              {
                rightItems.map((item, i) => (
                  <a key={item.to + i} className="navbar__item navbar__link" href={item.to}>
                  {item.src ? <img src={item.src} style={{marginTop:'6px'}} /> : item.label}
                </a>
                ))
              }
            </div>
          </div>
          <NavSideBar title = {title} logo = {logo} items= {items} onHide={hideSidebar} />
        </nav>
      </div>
    </div>
  )
}