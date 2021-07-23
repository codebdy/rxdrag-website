import clsx from "clsx";
import React, { useState } from "react";
import styles from "./styles.module.css"

export default function HomeCarousel(){
  const[hover, setHover] = useState(false);
  return (
    <div 
      className = {clsx(styles.container, 'container')}
    >
      <div 
        className = {clsx(styles.shell, {['shadow--md']:hover, ['shadow--lw']:!hover})}
        onMouseOver = {()=>setHover(true)}
        onMouseLeave = {()=>setHover(false)}  
      >
        <div className={styles.topbar}>
          <div className={clsx(styles.point, styles.point1)}></div>
          <div className={clsx(styles.point, styles.point2)}></div>
          <div className={clsx(styles.point, styles.point3)}></div>
        </div>
        <div className = {styles.content}>
          <img src = "img/rxmodels.jpg" />
        </div>
        <div className = {styles.navbar}>
          <div className={clsx(styles.point, styles.navPointActive)}>
          </div>
          <div className={clsx(styles.point, styles.navPoint)}>
          </div>          
          <div className={clsx(styles.point, styles.navPoint)}>
          </div>
        </div>
      </div>
    </div>
  )
}