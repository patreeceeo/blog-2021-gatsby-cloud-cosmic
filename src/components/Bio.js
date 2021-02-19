import React from 'react'
import { rhythm } from '../utils/typography'

export default ({ settings }) => (
  <div
    style={{
      display: 'flex',
      flex: '1 1 auto',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <img
      src={settings.author_avatar.imgix_url}
      alt={settings.author_name}
      style={{
        marginRight: rhythm(1 / 2),
        marginBottom: 0,
        width: rhythm(2),
        height: rhythm(2),
      }}
    />
    <div dangerouslySetInnerHTML={{ __html: settings.author_bio }} />
  </div>
)
