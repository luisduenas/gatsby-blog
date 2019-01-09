import React from 'react';
import { Link, graphql } from 'gatsby';
import './index.css';
import Bio from '../components/Bio';
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
        {/* <Bio /> */}
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          const image = node.frontmatter.image;
          console.log(image);
          return (
                <div key={node.fields.slug} className="blog-preview group">
                  <div className="blog-preview-image">
                    <Link to={node.fields.slug}>
                      <img src={`${image}`}/>
                    </Link>
                  </div>
                  <div className="blog-preview-content">
                  <h3>
                      <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                        {title}
                      </Link>
                    </h3>
                    <small>Published on {node.frontmatter.date}</small>
                    <small> by <strong>{node.frontmatter.creator}</strong></small>
                    <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                  </div>
                </div>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
