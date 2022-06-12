import { Helmet } from 'react-helmet'

const meta = {
  url: 'https://phaserplugins.com',
  title: 'Phaser Plugins',
  description: 'Unofficial plugin catalog for the Phaser framework',
  logo: '/logo.png',
  social: '/social.png',
}

const socialImageUrl = `${meta.url}${meta.social}`

export default function Head() {
  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="image" content={socialImageUrl} />

      <meta property="og:url" content={meta.siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={socialImageUrl} />
      <meta property="og:image:width" content={1600} />
      <meta property="og:image:height" content={900} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={socialImageUrl} />
    </Helmet>
  )
}
