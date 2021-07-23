import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { useState } from 'react';

const FeatureList = [
  {
    title: 'rxModels服务端',
    src: 'img/rxmodels.png',
    description: (
      <>
        
      </>
    ),
  },
  {
    title: 'rxModels 客户端',
    src: 'img/rxmodels-client.png',
    description: (
      <>
        
      </>
    ),
  },
  {
    title: 'DragIt可视化前端',
    src: 'img/dragit.png',
    description: (
      <>
        
      </>
    ),
  },
];

function Feature({src, title, description}) {
  const[hover, setHover] = useState(false);
  return (
    <div 
      className={clsx('col col--4 ')} 
      style={{padding:'30px'}}
      onMouseOver = {()=>setHover(true)}
      onMouseLeave = {()=>setHover(false)}  
    >
      <div className = {clsx("item", styles.featureItem, {['shadow--md']:hover, ['shadow--lw']:!hover})}>
        <div className="text--center">
          <img className={styles.featureImage} src = {src} />
        </div>
        <div className={clsx("text--center padding-horiz--md", styles.productName)}>
          <h3>{title}</h3>
        </div>
      </div>
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
