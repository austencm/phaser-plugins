import { Link } from 'gatsby';
import React from 'react';
import styles from './Menu.module.scss';

const Menu = ({ menu }) => (
  <nav className={styles['menu']}>
    <ul className={styles['menu__list']}>
      {menu.map((item) => (
        <li className={styles['menu__list-item']} key={item.path}>
          {item.path.indexOf('http') !== 0
            ? (
              <Link
                to={item.path}
                className={styles['menu__list-item-link']}
                activeClassName={styles['menu__list-item-link--active']}
              >
                {item.label}
              </Link>
            )
            : (
              <a
                href={item.path}
                className={styles['menu__list-item-link']}
              >
                {item.label}
              </a>
            )
          }
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
