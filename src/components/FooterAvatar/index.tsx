import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css"

export default function FooterAvatar(){
  return (
    <div className = {styles.footAvatar}>
      <div className = {styles.layout}>
        <div>
          <img className = {clsx(styles.maskSquircle, styles.mask)} src="img/avatar.jpg" />
        </div>
        <div className={styles.textArea}>
          <div className={styles.grayText}>
            Designed and developed by
          </div>
          <div>悠闲的水</div>
        </div>
      </div>
      <div className={styles.beian}>
        <a href="http://beian.miit.gov.cn/" target="_blank" >
          鲁ICP备20004279号-2
        </a> 
      </div>
      
    </div>
  )
}