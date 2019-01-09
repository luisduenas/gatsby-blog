import React from 'react';
import Link from 'gatsby-link';
import './header.css';
// import GithubIcon from 'react-icons/lib/go/mark-github'
import { FaGithub } from 'react-icons/fa'


class Header extends React.Component {
  state = {
    scrollHeight: 0,
  }

  componentDidMount() {
    window.onscroll = this.updateScroll
  }

  componentWillUnmount() {
    window.onscroll = null
  }


  updateScroll = () => {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    var scrolled = (winScroll / height) * 100
    this.setState({
      scrollHeight: scrolled,
    })
  }



  render() {
    const { location, siteTitle } = this.props
    return (
      <div className="main-nav">
        <div className="progress-bar">
          <span
            className="bar"
            style={{ width: this.state.scrollHeight + '%' }}
          />
        </div>

        <div className="header">
        <Link to="/" className={`logostyle`}>
              {siteTitle}
            </Link>
          <nav
            className={'nav active'}
            aria-hidden={false}
          >
            <Link
              to={'/'}
              activeStyle={{ backgroundColor: '#f5f5f5' }}
              
            >
              Home
            </Link>
          </nav>

          <a
            className="github"
            href="https://github.com/luisduenas"
            target="_blank"
            rel="noopener noreferer"
            style={{ color: 'black' }}
            title="GitHub"
          >
            <FaGithub style={{ verticalAlign: `text-top` }} />
          </a>
        </div>
      </div>
    )
  }
}

export default Header