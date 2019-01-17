import React from 'react';
import { StaticQuery,graphql } from 'gatsby';

class RecentPosts extends React.Component {
    render(){

        return( 
        <StaticQuery
            query={pageQuery}
            render={data => {
                    console.log('recent-post: ' + data)
                }
            }
            >
            </StaticQuery>
        )
    }
}

export default RecentPosts

export const pageQuery = graphql`
query {
    site {
        siteMetadata {
            title
        }
    }
    allMarkdownRemark(
        limit: 1,
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {frontmatter:{ published:{ eq:true } } }) {
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
}`
