import React from 'react';
import styles from './Copyright.module.scss';

const Copyright = ({ copyright }) => (
  <div className={styles['copyright']}>
    Maintained by <a href="https://github.com/austencm" title="GitHub">@austencm</a>.<br />
    Contribute <a href="https://github.com/austencm/phaser-plugins">here</a>.
  </div>
);

export default Copyright;
