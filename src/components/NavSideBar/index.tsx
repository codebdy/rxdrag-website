import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css"
import NavbarItem from "@theme/NavbarItem"

export default function NavSideBar(
  props:{
    title:string,
    logo:any,
    items:any,
    onHide:()=>void,
  }
){
  const {title, logo, items, onHide} = props;
  return(
    <>
      <div
        role="presentation"
        className="navbar-sidebar__backdrop"
        style ={{zIndex:1}}
        onClick={onHide}
      />
      <div className={clsx("navbar-sidebar", styles.sidebar)}>
        <div className="navbar-sidebar__brand">
          <a
            className={clsx("navbar__brand", styles.brand)}
            href="/"
            onClick={onHide}
          >
            <img className={styles.logo} src={logo.src} width={40}/>
            {title}
          </a>
        </div>
        <div className="navbar-sidebar__items">
          <div className="menu">
            <ul className="menu__list">
              {items.map((item, i) => (
                <NavbarItem
                  mobile
                  {...item}
                  {...(item.type !== "search" && { onClick: onHide })} // Search type def does not accept onClick
                  key={i}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}