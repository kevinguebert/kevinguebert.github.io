import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import emoodji from '../../assets/images/projects/Emoodji.png'
import harvyLogo from '../../assets/images/projects/harvy-social.jpg'
import harvyBPMLogo from '../../assets/images/projects/harvy-bpm.png'
import awLogo from '../../assets/images/projects/aww.jpg'
import notDead from '../../assets/images/projects/not-dead.jpg'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ExperienceUnit
            logo={harvyLogo}
            colour="#ff8c36"
            title="Harvy"
            cover
            link="https://harvy.app"
            timeperiod="2018 - Present"
            subtitle="Enjoy your runs with music that matches the elevation and difficulty of the path ahead. Side project built with React + Swift. Work in Progress."
          />
          <ExperienceUnit
            logo={emoodji}
            colour="#33435f"
            title="Emoodji"
            cover
            link="https://coda.io/d/Emoodji_d2tRkelpm2c/_suusf"
            timeperiod="2019"
            subtitle="A no-code application built with Coda. Winner of the ProductHunt 2019 No-Code Makers Festival"
          />
          <ExperienceUnit
            logo={harvyBPMLogo}
            colour="#312F31"
            title="BPM Explorer"
            cover
            link="https://bpm.harvy.app"
            timeperiod="2019"
            subtitle="Search for any song's BPM with Spotify."
          />
          <ExperienceUnit
            logo={awLogo}
            colour="#312F31"
            title="Aww New Tab"
            cover
            link="https://chrome.google.com/webstore/detail/aww-new-tab/imjpmelkeecfmlnnbobmneokhnamegpd"
            timeperiod="2019"
            subtitle="A Chrome Extension to spice up your new tab with gifs or images"
          />
          <ExperienceUnit
            logo={notDead}
            colour="#312F31"
            title="Not Dead Yet"
            cover
            link="https://chrome.google.com/webstore/detail/not-dead-yet/cemlmfgclebhbiphkabobhgbhgpnhbdc"
            timeperiod="2019"
            subtitle="Check if a product is dead before clicking on the link."
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
