const dotenv = require('dotenv')
const phaserPluginData = require('./lib/plugins')

dotenv.config({
  path: `.env`,
})

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
        graphQLQuery: `
          query {
            repository(owner:"torvalds",name:"linux"){
              description
            }
          }
        `,
      },
    },
  ],
}
