import React from 'react'
import Helmet from 'react-helmet'

import './style.scss'

import profileImage from '../assets/images/profile.jpg'
import favicon16 from '../assets/favicons/favicon-16x16.png'
import favicon32 from '../assets/favicons/favicon-32x32.png'

class TemplateWrapper extends React.Component {
  render () {

    const { children } = this.props

    return (
      <div className="template-wrapper">
        <Helmet
          title="Kevin Guebert"
          meta={[
            { name: 'description', content: "Full Stack Developer"},
            { name: 'keywords', content: 'full stack, developer, portfolio, personal website' },
            { property: 'og:url', content: "https://www.kevinguebert.com"},
            { property: 'og:image', content: profileImage },
            { property: 'og:title', content: "Kevin Guebert"},
            { property: 'og:description', content: "Full Stack Developer"},
          ]}
          link={[
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${favicon16}` },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${favicon32}` }
          ]}
        />
        <div className="template-wrapper-children">
          { children() }
        </div>
      </div>
    )
  }
}

export default TemplateWrapper
`
