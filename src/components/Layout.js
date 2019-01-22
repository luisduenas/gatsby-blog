import React from 'react';
import { Link } from 'gatsby';
import { rhythm, scale } from '../utils/typography';
import Header from './header';
import Footer from './footer';
import RecentPosts from '../components/recent-posts';


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      // home
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } 
    return (
      <div
        style={{
          margin:`auto`,
          maxWidth: rhythm(28),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
      <Header/>
        {header}
        {children}
        <RecentPosts/>
        <Footer/>
      </div>
    )
  }
}

export default Layout
