import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { useState } from 'react';

const FeatureList = [
  {
    title: 'rxModels服务端',
    src: 'img/rxmodels.png',
    url: 'https://github.com/rxdrag/rx-models',
  },
  {
    title: 'rxModels 客户端',
    src: 'img/rxmodels-client.png',
    url:'https://github.com/rxdrag/rx-models-client',
  },
  {
    title: 'DragIt可视化前端',
    src: 'img/dragit.png',
    url: 'https://github.com/rxdrag/dragit',
  },
];

function Feature({src, title, url}) {
  const[hover, setHover] = useState(false);
  return (
    <div 
      className={clsx('col col--4 ', styles.card)} 
      style={{padding:'30px'}}
      onMouseOver = {()=>setHover(true)}
      onMouseLeave = {()=>setHover(false)}  
    >
      <a href={url} target="_blank">
      <div className = {clsx("item", styles.featureItem, {['shadow--md']:hover, ['shadow--lw']:!hover})}>
        <div className="text--center">
          <img className={styles.featureImage} src = {src} />
        </div>
        <div className={clsx("text--center padding-horiz--md", styles.productName)}>
          <h3>{title}</h3>
        </div>
      </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx("row", styles.products)}>
          <h2>开源项目</h2>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
