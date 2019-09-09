import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <a href="/"><div className="image">
        </div></a>
        <div className="bio">
          A full stack developer &amp; constant learner who loves finding new ways to use technology.
          <div className="emoji">

          </div>
        </div>
      </div>
    )
  }
}

export default About