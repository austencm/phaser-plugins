const dotenv = require('dotenv')
const camelCase = require('lodash/camelCase')
const fs = require('fs')

const allRepos = require('./data/repos.json')

dotenv.config({ path: `.env` })

function getRepoAlias(repoOwnerName, index) {
  return `repo${index}${camelCase(repoOwnerName)}`
}

const repoFields = `
  id
  name
  owner {
    id
    login
    url
    avatarUrl
  }
  shortDescriptionHTML
  url
  updatedAt
  stargazerCount
  forks {
    totalCount
  }
`

const reposQuery = `
  query repos {
    ${allRepos.map(({ repo }, i) => {
      const [owner, name] = repo.split('/')
      const alias = getRepoAlias(repo, i)

      // TODO: could reduce maintenance when repos move by querying by id
      // https://github.com/orgs/community/discussions/22184#discussioncomment-3235793
      return `
          ${alias}: repository(owner: "${owner}", name: "${name}") {
            ${repoFields}
          }
        `
    })}
  }
`

const localSearchQuery = `
  {
    githubData {
      data {
        ${allRepos.map(
          ({ repo }, i) => `
            ${getRepoAlias(repo, i)} {
              ${repoFields}
            }
          `
        )}
      }
    }
  }
`

if (process.env.NODE_ENV === 'development') {
  fs.writeFile('./repos-query.txt', reposQuery, (err) => {
    if (err) {
      console.log(err)
    }
  })
}

module.exports = {
  siteMetadata: {
    title: `Phaser Plugins`,
    siteUrl: `https://phaserplugins.com`,
  },
  jsxRuntime: 'automatic',
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/rocket-launch-outline.svg',
      },
    },
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
        query: localSearchQuery,
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
              imageUrl: owner.avatarUrl,
              stars: stargazerCount,
              forks: forks.totalCount,
              updatedAt,
              compatibility,
            }
          }),
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [process.env.GA4_ID],
        pluginConfig: { head: true },
      },
    },
  ],
}
