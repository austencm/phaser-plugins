const dotenv = require('dotenv')
const _take = require('lodash/take')

const phaserPluginData = require('./data/plugins.json')

dotenv.config({ path: `.env` })

const repoFields = `
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
  stargazers {
    totalCount
  }
  updatedAt
`

const reposQuery = `
  query repos {
    ${_take(phaserPluginData, 3)
      .map(({ repo }, index) => {
        const [owner, name] = repo.split('/')

        return `
          repo${index}: repository(owner: "${owner}", name: "${name}") {
            ${repoFields}
          }
        `
      })
      .join('')}
  }
`

module.exports = {
  siteMetadata: {
    title: `Phaser Plugins`,
    siteUrl: `https://phaserplugins.com`,
  },
  jsxRuntime: 'automatic',
  plugins: [
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('postcss-preset-env')({ stage: 1 })],
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-sharp',
      options: { defaultQuality: 90 },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: { '@': 'src' },
        extensions: ['js'],
      },
    },
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google2: [
            {
              family: 'Exo 2',
              axes: 'wght@300..900',
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GITHUB_API_TOKEN,
        graphQLQuery: reposQuery,
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'plugins',
        engine: 'flexsearch',
        query: `
          {
            githubData {
              data {
              ${_take(phaserPluginData, 3).map(
                (plugin, index) => `
                  repo${index} {
                    ${repoFields}
                  }
                `
              )}
                }
            }
          }
        `,
        index: ['ownerLogin', 'name', 'description'],
        store: [
          'id',
          'name',
          'description',
          'ownerLogin',
          'ownerUrl',
          'ownerAvatarUrl',
          'url',
          'stars',
          'updatedAt',
          'compatibility',
        ],
        normalizer: ({ data }) =>
          Object.values(data.githubData.data).map((repo, index) => {
            const { id, name, owner, description, url, stargazers, updatedAt } =
              repo
            const compatibility = phaserPluginData[index].compatibility

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
          }),
      },
    },
  ],
}
