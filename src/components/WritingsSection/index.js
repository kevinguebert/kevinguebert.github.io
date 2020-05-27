import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import puppeteer from '../../assets/images/projects/puppeteer.jpg'
import htmlDOM from '../../assets/images/projects/html.jpg'
import zapier from '../../assets/images/projects/zapier.png'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Writing" link>
        <div className="row">
          <ExperienceUnit
            logo={zapier}
            colour="#ff8c36"
            title="Updating Multi-reference Fields with Zapier & Webflow"
            cover
            link="/2020/02/21/updating-multireference-fields-zapier-webflow"
            timeperiod="2020"
            subtitle="This past week while integrating Zapier and Webflow, I became surprised to learn that updating reference and multi-reference fields did not work right out of the box. After spending more time than I wanted on it, I was able to make it work for both single reference and multi-reference. This post is only about multi-reference as single-reference is actually 'easier.'"
          />
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
