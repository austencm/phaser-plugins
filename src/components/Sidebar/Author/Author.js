import { Link, withPrefix } from 'gatsby';

import React from 'react';
import styles from './Author.module.scss';

const Author = ({ author }) => (
  <div className={styles['author']}>
    <Link to="/">
      <img
        src={withPrefix(author.photo)}
        className={styles['author__photo']}
        width={208}
        height={75}
        alt={author.name}
      />
    </Link>

    <h1 className={styles['author__title']}>
      Unofficial open source plugin repository for the <a href="https://phaser.io" title="Phaser">Phaser</a> framework.
    </h1>

    <p className={styles['author__subtitle']}>

    </p>
  </div>
);

export default Author;
