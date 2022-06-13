const { schedule } = require('@netlify/functions')
const fetch = require('node-fetch')

const handler = async function (event, context) {
  await fetch(process.env.NETLIFY_BUILD_HOOK, { method: 'POST' })

  return {
    statusCode: 200,
  }
}

module.exports.handler = schedule('@daily', handler)
