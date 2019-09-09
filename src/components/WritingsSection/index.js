import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import drupal from '../../assets/images/projects/drupal.jpg'
import puppeteer from '../../assets/images/projects/puppeteer.jpg'
import htmlDOM from '../../assets/images/projects/html.jpg'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Writings" link>
        <div className="row">
          <ExperienceUnit
            logo={puppeteer}
            colour="#ff8c36"
            title="Testing with Puppeteer"
            cover
            link="https://www.outsideonline.com/2340621/testing-puppeteer-part-1"
            timeperiod="2018"
            subtitle="Puppeteer allows you to do anything you would do manually in Chrome but through code. Need a screenshot? Want to test form inputs? Need to test your web speed? Puppeteer can do all that and more."
          />
          <ExperienceUnit
            logo={drupal}
            colour="#33435f"
            title="Drupalgeddon 2 - What & Why"
            cover
            link="https://www.outsideonline.com/2326456/drupalgeddon-2-what-why"
            timeperiod="2018"
            subtitle="First off, before I go any further, if you operate a Drupal site and have not applied these patches already, please patch your site right now."
          />
          <ExperienceUnit
            logo={htmlDOM}
            colour="#312F31"
            title="HTML Parsing with the DOMDocument"
            cover
            link="https://www.outsideonline.com/2320776/html-parsing-domdocument"
            timeperiod="2018"
            subtitle="The DOMDocument is a class built in to PHP that helps developers navigate an HTML document tree and provides methods to help interact with the document."
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
