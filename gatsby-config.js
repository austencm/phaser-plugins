'use strict';

require('dotenv').config();

const siteConfig = require('./config.js');
const phaserPlugins = require('./content/plugins');
const postCssPlugins = require('./postcss-config.js');

module.exports = {
  siteMetadata: {
    url: siteConfig.url,
    title: siteConfig.title,
    subtitle: siteConfig.subtitle,
    logo: siteConfig.logo,
    copyright: siteConfig.copyright,
    disqusShortname: siteConfig.disqusShortname,
    menu: siteConfig.menu,
    author: siteConfig.author
  },
  plugins: [
    {
      resolve: `@dschau/gatsby-source-github`,
      options: {
        headers: {
          Authorization: `Bearer ${siteConfig.githubToken}`,
        },
        queries: phaserPlugins.map(({ repo }) => {
          const  [owner, name] = repo.split('/');

          return `
            {
              repository(owner: "${owner}", name: "${name}") {
                id
                name
                owner {
                  id
                  login
                  avatarUrl
                  url
                }
                nameWithOwner
                description
                url
                homepageUrl
                stargazers {
                  totalCount
                }
                updatedAt
              }
            }
          `
        })
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains.
        name: 'phaserPlugins',

        // GraphQL query used to fetch all data for the search index.
        query: `
          {
            allGithubRepository {
              edges {
                node {
                  id
                  name
                  owner {
                    id
                    login
                    avatarUrl
                    url
                  }
                  nameWithOwner
                  description
                  url
                  homepageUrl
                  stargazers {
                    totalCount
                  }
                  updatedAt
                }
              }
            }
          }
        `,

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        store: ['id', 'name', 'description', 'ownerLogin', 'ownerUrl', 'ownerAvatarUrl', 'compatibility', 'url', 'stars', 'updatedAt'],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index.
        normalizer: ({ data }) => (
          data.allGithubRepository.edges.map(({ node }, i) => {
            const { id, name, owner, description, url, stargazers, updatedAt } = node;
            const compatibility = phaserPlugins[i].compatibility.join(' ');

            return {
              id,
              name,
              ownerLogin: owner.login,
              ownerUrl: owner.url,
              ownerAvatarUrl: owner.avatarUrl,
              description,
              url,
              stars: stargazers.totalCount,
              updatedAt,
              compatibility,
            }
          })
        ),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/media`,
        name: 'media'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'components',
        path: `${__dirname}/src/components`
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "components": `${__dirname}/src/components`,
        },
        extensions: [
          "js",
        ],
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {

      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: siteConfig.googleAnalyticsId }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
          {
            site {
              siteMetadata {
                url
              }
            }
            allSitePage(
              filter: {
                path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
              }
            ) {
              edges {
                node {
                  path
                }
              }
            }
          }
        `,
        output: '/sitemap.xml',
        serialize: ({ site, allSitePage }) => allSitePage.edges.map((edge) => ({
          url: site.siteMetadata.url + edge.node.path,
          changefreq: 'daily',
          priority: 0.7
        }))
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteConfig.title,
        short_name: siteConfig.title,
        start_url: '/',
        background_color: '#FFF',
        theme_color: '#000',
        display: 'standalone',
        icon: 'static/favicon.png'
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [...postCssPlugins],
        cssLoaderOptions: {
          camelCase: false,
        }
      }
    }
  ]
};
