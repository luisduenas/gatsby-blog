import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';

class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.commentsEl = React.createRef();
    this.state = { status: 'pending' };
  }

  componentDidMount() {
    const { commentsRepository, commentsTheme } = this.props;

    const scriptEl = document.createElement('script');
    scriptEl.onload = () => this.setState({ status: 'success' });
    scriptEl.onerror = () => this.setState({ status: 'failed' });
    scriptEl.async = true;
    scriptEl.src = 'https://utteranc.es/client.js';
    scriptEl.setAttribute('repo', commentsRepository);
    scriptEl.setAttribute('issue-term', 'title');
    scriptEl.setAttribute('theme', commentsTheme);
    scriptEl.setAttribute('crossorigin', 'anonymous');
    this.commentsEl.current.appendChild(scriptEl);
  }

  render() {
    const { status } = this.state;

    return (
      <div>
        {status === 'failed' && <div>Was unable to load comments. Please try again.</div>}
        {status === 'pending' && <div>Loading script...</div>}
        <div ref={this.commentsEl} />
      </div>
    );
  }
}

Comments.propTypes = {
  commentsRepository: PropTypes.string.isRequired,
};

const query = graphql`
  query CommentsRepositoryQuery {
    site {
      siteMetadata {
        commentsRepository
        commentsTheme
      }
    }
  }
`;

export default () => (
  <StaticQuery query={query} render={data => <Comments {...data.site.siteMetadata} />} />
);