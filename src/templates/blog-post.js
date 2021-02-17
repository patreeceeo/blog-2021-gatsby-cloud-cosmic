import React from 'react'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'

import Bio from '../components/Bio'
import Layout from '../components/layout'
import { rhythm } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.cosmicjsPosts')
    const siteTitle = get(
      this.props,
      'data.cosmicjsSettings.metadata.site_title'
    )
    const author = get(this, 'props.data.cosmicjsSettings.metadata')
    const location = get(this, 'props.location')

    const hasFeaturedImage = get(post, 'metadata.has_featured_image')
    const featuredImageFluid = get(
      post,
      'metadata.featured_image.local.childImageSharp.fluid'
    )
    const featuredImageUrl = get(featuredImageFluid, 'srcWebp')
    const pageTitle = `${post.title} | ${siteTitle}`
    const postDescription = get(post, 'metadata.description')

    return (
      <Layout location={location}>
        <style>
          {`
          .post-content {
            text-align: justify;
          }
          .post-hero {
            width: calc(100% + ${rhythm(8)});
            margin-left: ${rhythm(-4)};
          }
          @media (max-width: ${rhythm(32)}) {
            .post-hero {
              width: calc(100% + ${rhythm((3 / 4) * 2)});
              margin-left: ${rhythm(-3 / 4)};
            }
          }
          @media (max-width: ${rhythm(16)}) {
            .post-content {
              text-align: left;
            }
          }
        `}
        </style>
        <Helmet title={pageTitle}>
          <meta property="og:title" content={pageTitle} />
          <meta
            property="og:description"
            content={
              postDescription || 'Verbal/visual noodlings of Patrick Canfield'
            }
          />
          <meta
            property="og:image"
            content={featuredImageUrl || author.author_avatar.imgix_url}
          />
          <meta
            property="twitter:image"
            content={featuredImageUrl || author.author_avatar.imgix_url}
          />
          <meta
            property="og:url"
            content={`https://www.patrickcanfield.com/posts/${post.slug}`}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content={siteTitle} />
          <meta name="twitter:image:alt" content={postDescription} />
        </Helmet>
        <Link to="/" style={{ color: '#818181' }}>
          ← home
        </Link>
        <h1>{post.title}</h1>
        <p
          style={{
            textAlign: 'right',
          }}
        >
          {post.metadata.published_date}
        </p>
        {hasFeaturedImage && featuredImageFluid && (
          <Image
            className="post-hero"
            Tag="div"
            fluid={featuredImageFluid}
            backgroundColor={`#007ACC`}
            alt={postDescription}
            style={{
              marginBottom: rhythm(0.6),
            }}
          />
        )}
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio settings={author} />
        <Link to="/" style={{ color: '#818181' }}>
          ← home
        </Link>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    cosmicjsPosts(slug: { eq: $slug }) {
      id
      content
      title
      slug
      metadata {
        description
        published_date
        has_featured_image
        featured_image {
          local {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
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
