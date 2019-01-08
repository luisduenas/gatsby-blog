import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import './header.css';

function Header() {
  return (
    <StaticQuery
      query={headerQuery}
      render={data => {
        const { author, social, title} = data.site.siteMetadata
        return (
          <div>
            <h1>{title}</h1>
            <nav>
            <ul>
                <li>Home</li>
                <li>Something</li>
                <li>Contact</li>  
            </ul>
            </nav>
          </div>
        )
      }}
    />
  )
}

const headerQuery = graphql`
  query HeaderQuery {
    avatar: file(absolutePath: { regex: "/avatar.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          github
        }
        title
      }
    }
  }
`

export default Header
