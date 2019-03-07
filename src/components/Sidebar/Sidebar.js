import { Link, withPrefix } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';

import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import React from 'react';
import styles from './Sidebar.module.scss';

export const PureSidebar = ({ data }) => {
  const {
    author,
    copyright,
    menu,
    logo,
  } = data.site.siteMetadata;

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Author author={author} />
        <Menu menu={menu} />
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export const Sidebar = (props) => (
  <StaticQuery
    query={graphql`
      query SidebarQuery {
        site {
          siteMetadata {
            title
            subtitle
            logo
            copyright
            menu {
              label
              path
            }
            author {
              name
              photo
              bio
              contacts {
                twitter
                telegram
                github
                email
                rss
                vkontakte
              }
            }
          }
        }
      }
    `}
    render={(data) => <PureSidebar {...props} data={data}/>}
  />
);

export default Sidebar;
