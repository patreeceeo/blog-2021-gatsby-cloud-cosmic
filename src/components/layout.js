import React from 'react'
// import { Link } from 'gatsby'

import cosmicjsLogo from '../../static/cosmicjs.svg'
import gatsbyLogo from '../../static/gatsby.png'
import { rhythm } from '../utils/typography'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

export default ({ children }) => {
  return (
    <div>
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: `${rhythm(3 / 4)}`,
          maxWidth: rhythm(24),
          padding: `0 ${rhythm(3 / 4)} ${rhythm(3 / 4)} ${rhythm(3 / 4)}`,
          minHeight: 'calc(100vh - 42px)',
        }}
      >
        {children}
      </div>
      <footer
        style={{
          textAlign: 'center',
          padding: `0 20px 80px 0`,
        }}
      >
        powered by&nbsp;
        <a
          target="_blank"
          href="https://gatsbyjs.org"
          style={{
            color: '#191919',
            boxShadow: 'none',
          }}
        >
          <img
            src={gatsbyLogo}
            alt="Gatsby JS"
            style={{
              width: '20px',
              margin: '0 4px -3px 2px',
            }}
          />
          <strong>Gatsby</strong>
        </a>
        &nbsp;and&nbsp;
        <a
          target="_blank"
          href="https://cosmicjs.com"
          style={{
            color: '#191919',
            boxShadow: 'none',
          }}
        >
          <img
            src={cosmicjsLogo}
            alt="Cosmic JS"
            style={{
              width: '18px',
              margin: '0 4px -2px 5px',
            }}
          />
          <strong>Cosmic JS</strong>
        </a>
      </footer>
    </div>
  )
}
