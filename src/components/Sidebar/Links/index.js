import React, { Component } from 'react'

import './style.scss'
import 'font-awesome/css/font-awesome.min.css'

class Links extends Component {
  render() {
    return (
      <div className="links">
        <ul className="icons-list">
          <li className="icon">
            <a href="https://www.github.com/kevinguebert" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://www.twitter.com/kevinguebert" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://www.producthunt.com/@kevinguebert" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-product-hunt"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://www.linkedin.com/in/kevinguebert" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li className="icon">
            <a href="mailto:kevin@harvy.app" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-envelope"></i>
            </a>
          </li>
        </ul>
        <div className="small">
          Built with <span role="img">❤</span>️ using <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">GatsbyJS</a>
        </div>
        <div className="small">
          © Kevin Guebert LLC 
        </div>
      </div>
    )
  }
}

export default Links