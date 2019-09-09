import React, {Component} from 'react'

import './style.scss';

class Section extends Component {
  render () {
    return (
      <div className="section">
        <h4 className={this.props.link ? 'bold inline' : 'bold'}>
          {this.props.title}
        </h4>
        {this.props.link &&
          <a className="more-link" href="/blog">Read More →</a>
        }
        <div className={this.props.link ? 'section-units inline' : 'section-units'}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Section
