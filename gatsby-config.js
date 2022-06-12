const dotenv = require('dotenv')

const allRepos = require('./data/repos.json')

dotenv.config({ path: `.env` })

const repoFields = `
  id
  name
  owner {
    id
    login
    url
  }
  shortDescriptionHTML
  url
  updatedAt
  openGraphImageUrl
  stargazerCount
  forks {
    totalCount
  }
`

const reposQuery = `
  query repos {
    ${allRepos
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
              family: 'Inter',
              axes: 'wght@100..900',
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
        name: 'repos',
        engine: 'flexsearch',
        query: `
          {
            githubData {
              data {
                ${allRepos.map(
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
          'url',
          'imageUrl',
          'stars',
          'forks',
          'updatedAt',
          'compatibility',
        ],
        normalizer: ({ data }) =>
          Object.values(data.githubData.data).map((repo, index) => {
            const {
              id,
              name,
              owner,
              shortDescriptionHTML,
              url,
              openGraphImageUrl,
              stargazerCount,
              forks,
              updatedAt,
            } = repo
            const { compatibility } = allRepos[index]

            return {
              id,
              name: name.replaceAll('_', '_<wbr>'),
              description: shortDescriptionHTML,
              ownerLogin: owner.login,
              ownerUrl: owner.url,
              url,
              imageUrl: openGraphImageUrl,
              stars: stargazerCount,
              forks: forks.totalCount,
              updatedAt,
              compatibility,
            }
          }),
      },
    },
  ],
}
