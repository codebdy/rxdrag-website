import clsx from "clsx";
import React from "react";
import { tongjiScript } from "../../consts";
import styles from "./styles.module.css"

export default function FooterAvatar(){
  return (
    <div className = {styles.footAvatar}>
      <div className = {styles.logo}>
        <span className = {styles.ruxin}>rx</span><span>Drag</span>
      </div>
      <div className = {styles.footerNav}>
        <ul>
          <li> <a href="#">首页</a> </li>
          <li> <a href="#">入门</a> </li>
          <li> <a href="#">生态圈</a> </li>
          <li> <a href="#">应用</a> </li>
          <li> <a href="#">GITHUB</a> </li>          
          <li> <a href="#">交流群</a> </li>
        </ul>

      </div>
      <div className = {styles.layout}>

        <div>
          <a href="https://github.com/rxdrag" target="_blank" >
            <img className = {clsx(styles.maskSquircle, styles.mask)} src="img/avatar.jpg" />
          </a>
        </div>
        <div className={styles.textArea}>
          <div className={styles.grayText}>
            Designed and developed by
          </div>
          <div><a target="_blank" href="https://github.com/rxdrag">悠闲的水</a></div>
        </div>
      </div>
      <div className={styles.beian}>
        <a href="http://beian.miit.gov.cn/" target="_blank" >
          鲁ICP备20004279号-2
        </a> 
      </div>
      {
        <div  dangerouslySetInnerHTML = {{__html:tongjiScript}} >

        </div>
      }
    </div>
  )
}