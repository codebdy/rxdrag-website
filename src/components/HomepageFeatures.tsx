import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'rxModels服务',
    src: 'img/rxmodels.png',
    description: (
      <>
        存储业务对象的服务器，通过通用JSON查询、存储数据。
      </>
    ),
  },
  {
    title: 'rxModels 客户端',
    src: 'img/rxmodels-client.png',
    description: (
      <>
        基于ER图的客户端，管理RxModles。
      </>
    ),
  },
  {
    title: 'DragIt可视化前端',
    src: 'img/dragit.png',
    description: (
      <>
        拖拽生成前端，可视化前端，基于MUI实现。
      </>
    ),
  },
];

function Feature({src, title, description}) {
  return (
    <div className={clsx('col col--4')} style={{padding:'50px'}}>
      <div className="text--center">
        <img width={200} src = {src} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
