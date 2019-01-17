import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle} >
        <SEO
          title="brainstorm.dev"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
            <div key={node.fields.slug} className="blog-preview group hover">
                  <div className="blog-preview-content">
                    <h3>
                        {title}
                    </h3>
                    <small>Published on {node.frontmatter.date}</small>
                    <small> by <strong>{node.frontmatter.creator}</strong></small>
                    <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                  </div>
                </div>
                </Link>

          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { 
        fields: [
          frontmatter___date
        ], 
        order: DESC }
        filter: {
          frontmatter:{ 
            published:{ 
              eq:true 
            } 
          } 
        }
      ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            image
            creator
          }
        }
      }
    }
  }
`
