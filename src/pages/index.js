import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/layout'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(
      this,
      'props.data.cosmicjsSettings.metadata.site_title'
    )
    const posts = get(this, 'props.data.allCosmicjsPosts.edges')
    const author = get(this, 'props.data.cosmicjsSettings.metadata')
    const location = get(this, 'props.location')

    return (
      <Layout location={location}>
        <Helmet title={siteTitle} />
        <Bio settings={author} />
        {posts.map(({ node }) => {
          const title = get(node, 'title') || node.slug
          const isScrap = get(node, 'metadata.is_scrap')
          return (
            <div key={node.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                {!isScrap && (
                  <Link style={{ boxShadow: 'none' }} to={`posts/${node.slug}`}>
                    {title}
                  </Link>
                )}
              </h3>
              <small>{node.metadata.published_date}</small>
              <p
                dangerouslySetInnerHTML={{ __html: node.metadata.description }}
              />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    allCosmicjsPosts(
      sort: { fields: [metadata___published_date], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          metadata {
            description
            published_date
            is_scrap
          }
          slug
          title
        }
      }
    }
    cosmicjsSettings(slug: { eq: "general" }) {
      metadata {
        site_title
        author_name
        author_bio
        author_avatar {
          imgix_url
        }
      }
    }
  }
`
