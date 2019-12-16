import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import LunrSearch from '../components/LunrSearch';
import Page from '../components/Page';
import React from 'react';
import Sidebar from '../components/Sidebar';
import { graphql } from 'gatsby';

const IndexTemplate = ({ data }) => {
  const { siteMetadata: meta } = data.site;
  const image = meta.siteUrl + meta.preview;

  return (
    <Layout>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.subtitle} />
        <meta name="image" content={image} />

        <meta property="og:url" content={meta.siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.subtitle} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content={600} />
        <meta property="og:image:height" content={600} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@austencm" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.subtitle} />
        <meta name="twitter:image" content={image} />
      </Helmet>

      <Sidebar isIndex />
      <Page>
        <LunrSearch lunr={data.localSearchPhaserPlugins} updatedAt={meta.updatedAt} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query IndexTemplate {
    site {
      siteMetadata {
        title
        subtitle
        siteUrl
        preview
        updatedAt
      }
    }
    localSearchPhaserPlugins {
      index
      store
    }
  }
`;

export default IndexTemplate;
