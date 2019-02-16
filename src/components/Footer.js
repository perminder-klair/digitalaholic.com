import React from 'react';

import { rhythm } from '../utils/typography';

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right' }}>
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            rss
          </a>
        </div>
        <a
          href="https://www.klair.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          profile
        </a>{' '}
        &bull;{' '}
        <a
          href="https://mobile.twitter.com/pinku1"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>{' '}
        &bull;{' '}
        <a
          href="https://github.com/perminder-klair"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{' '}
        &bull;{' '}
        <a
          href="http://www.linkedin.com/pub/parminder-singh/3a/352/67b"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
      </footer>
    );
  }
}

export default Footer;
