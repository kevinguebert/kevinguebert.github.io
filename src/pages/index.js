import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import WritingsSection from '../components/WritingsSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'
import Helmet from 'react-helmet'

import profileImage from '../assets/images/profile.jpg'
import favicon16 from '../assets/favicons/favicon-16x16.png'
import favicon32 from '../assets/favicons/favicon-32x32.png'

import './style.scss'

const IndexPage = () => (
    <div className="index">
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
      <div className="main">
        <h5>
          Hi, I'm <span className="bold">Kevin Guebert</span>
        </h5>

        <h3 className="bold">
          Full stack web developer and part time iOS developer with experience ranging from startups to enterprise software.
        </h3>

        <ProjectsSection />
        <ExperienceSection />
        <WritingsSection />
      </div>

      <div className="aside">
        <div className="top">
          <About />
        </div>
        <div className="bottom">
          <Links />
        </div>
      </div>
    </div>
)

export default IndexPage
