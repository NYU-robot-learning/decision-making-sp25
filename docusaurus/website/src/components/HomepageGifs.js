import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
// import Image from '@theme/IdealImage';
// import car_gif from '../../static/img/car.gif';

const GifList = [
  {
    img_filename: './img/rl.gif',
  }
];

function HomepageImage({img_filename}) {
  return (
    <div className={clsx('col')}>     
      <div className="text--center padding-horiz--md car-gif">
        <img src={img_filename} />
      </div>
    </div>
  );
}

export default function HomepageImages() {
  return (
    <section className={styles.home_images}>
      <div className="container">
        <div className="row">
          {GifList.map((props, idx) => (
            <HomepageImage key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
