import Helmet from 'react-helmet';
import React from 'react';
import styles from './Layout.module.scss';

const Layout = ({ children, title, description }) => (
  <div className={styles.layout}>
    <Helmet>
      <html lang="en" />
      {/* <title>{title}</title>
      <meta name="description" content={description} /> */}
    </Helmet>
    {children}
  </div>
);

export default Layout;
