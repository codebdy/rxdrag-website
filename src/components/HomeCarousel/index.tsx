import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css"

export default function HomeCarousel(){
  return (
    <div className = {clsx(styles.container, 'container')}>
      <div className = {clsx(styles.shell, 'item shadow--md')}>

      </div>
    </div>
  )
}