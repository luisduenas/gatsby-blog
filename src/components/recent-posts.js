import React from 'react';
import { StaticQuery,graphql } from 'gatsby';

class RecentPosts extends React.Component {
    render(){

        return( 
        <StaticQuery
            query={pageQuery}
            render={data => {
                <div>
                    <input 
                    type="text"
                    placeholder="holi" />
                </div>
                    console.log('recent-post: ')
                    console.log(data)
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
        limit: 3,
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
