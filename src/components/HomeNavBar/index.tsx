import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.css"
import useWindowSize, { windowSizes } from "@theme/hooks/useWindowSize"
import NavSideBar from "../NavSideBar";
import useLockBodyScroll from "@theme/hooks/useLockBodyScroll"
import NavBar from "../../theme/NavBar";
import { splitNavItemsByPosition } from "../../theme/NavBar/splitNavItemsByPosition";
import NavbarItem from "@theme/NavbarItem"
import "./style.css"

export default function HomeNavBar(props:{}){
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

  const handleScroll = function(event:any){
    let topOffset = window.pageYOffset || document.documentElement.offsetTop || 0
    setSticky(topOffset > 100)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      // 清除
      window.removeEventListener('scroll', handleScroll);
    };
  },[]);
  
  return(
    <>
      <div className={clsx(styles.stickNavArea,'hompage')} style={{top:sticky ? 0 : '-70px'}}>
        <NavBar />
      </div>   
      <div className="container hompage">
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
              <a href="/" className={clsx("navbar__brand", styles.brand)}>
                <img className={styles.logo} src={logo.src} />
                {title}
              </a>
              {
                leftItems.map((item, i) => (
                  <NavbarItem {...item} key={i} />
                ))
              }
            </div>
            <div className="navbar__items navbar__items--right">
              {
                rightItems.map((item, i) => (
                  item.src 
                  ? <a key={item.to + i} className="navbar__item navbar__link" href={item.to}>
                    <img src={item.src} style={{marginTop:'6px'}} />
                    </a>
                  :
                  <NavbarItem {...item} key={i} />
                ))
              }
            </div>
          </div>
          <NavSideBar title = {title} logo = {logo} items= {items} onHide={hideSidebar} />
        </nav>
      </div> 
    </>
  )
}