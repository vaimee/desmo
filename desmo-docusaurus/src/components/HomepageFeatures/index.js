import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: (<>Developed by <a href="https://vaimee.com/">VAIMEE</a></>),
    Svg: require('@site/static/img/logoVaimee.svg').default,
    description: (
      <>Data-driven composable applications, for everyone, for any kind of data</>
    ),
  },
  {
    title: (<>Sponsored by <a href="https://ontochain.ngi.eu/">NGI-ONTOCHAIN</a></>),
    // Svg: require('@site/static/img/logo-ngi-ontochain.svg').default,
    imgPath:'@site/static/img/logo-ngi-ontochain.png',
    description: (
      <>
      A new software ecosystem for trusted, traceable & transparent ontological knowledge
      </>
    ),
  }
];

function Feature({Svg, title, description,imgPath}) {
  if(Svg!==undefined){
    return (
      <div className={clsx('col col--6')}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }else{
    return (
      <div className={clsx('col col--6')}>
        <div className="text--center">
          <img src={imgPath} className={styles.featureSvg} style ={{objectFit: "contain"}} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );

  }
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
