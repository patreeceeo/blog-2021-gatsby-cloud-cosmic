import React from 'react'

import cosmicjsLogo from '../../static/cosmicjs.svg'
import gatsbyLogo from '../../static/gatsby.png'
import { rhythm } from '../utils/typography'

export default ({ children }) => {
  return (
    <div id="layoutRoot">
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: `${rhythm(3 / 4)}`,
          maxWidth: rhythm(32),
          padding: `0 ${rhythm(3 / 4)} ${rhythm(3 / 4)} ${rhythm(3 / 4)}`,
          minHeight: 'calc(100vh - 42px)',
        }}
      >
        {children}
      </div>
      <footer
        style={{
          margin: rhythm(3 / 4),
          color: '#818181',
          fontSize: rhythm(0.5),
        }}
      >
        powered by&nbsp;
        <a
          target="_blank"
          href="https://gatsbyjs.org"
          style={{ color: 'inherit' }}
        >
          <img
            src={gatsbyLogo}
            alt="Gatsby JS"
            style={{
              width: '15px',
              margin: '0 4px -3px 2px',
            }}
          />
          <strong>Gatsby</strong>
        </a>
        &nbsp;and&nbsp;
        <a
          target="_blank"
          href="https://cosmicjs.com"
          style={{ color: 'inherit' }}
        >
          <img
            src={cosmicjsLogo}
            alt="Cosmic JS"
            style={{
              width: '13px',
              margin: '0 4px -2px 5px',
            }}
          />
          <strong>Cosmic JS</strong>
        </a>
      </footer>
    </div>
  )
}
