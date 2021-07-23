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

      </div>
    </div>
  )
}