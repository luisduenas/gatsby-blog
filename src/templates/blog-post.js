import React from 'react';
import { Link, graphql } from 'gatsby';
import './blog-post.css';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import { rhythm, scale } from '../utils/typography';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const postAuthor = post.frontmatter.creator
    const postDate = post.frontmatter.date
    const siteTitle = this.props.data.site.siteMetadata.title
    const postImage = post.frontmatter.image
    const postImageFooter = post.frontmatter.imgFooter
    const { previous, next } = this.props.pageContext
  
    if(postImage != null){
      var image =  <div>
          <img 
          src={postImage}
          className="img-post"
          />
          <p style={{
            textAlign: 'center',
            fontStyle: `italic`,
            textDecoration: `underline`,
            fontSize:16,
            }}>
            {postImageFooter}
          </p>
        </div>
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <h1>{post.frontmatter.title}</h1>
        {image}
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {postDate}
        </p>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          by: {postAuthor}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            Return to homepage
          </Link>
        

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        image
        title
        imgFooter
        creator
      }
    }
  }
`
