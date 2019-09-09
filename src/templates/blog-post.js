import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import profileImage from '../assets/images/profile.jpg'
import favicon16 from '../assets/favicons/favicon-16x16.png'
import favicon32 from '../assets/favicons/favicon-32x32.png'

import '../pages/style.scss'
import './style.scss'

const Template = ({data, location, pathContext}) => {
  const {markdownRemark: post} = data;
  const {frontmatter, html} = post;
  const {title} = frontmatter;
  const {next, prev} = pathContext;

  return (
    <div>
        <Helmet
          title={`${title} - Kevin Guebert`}
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
      <div className="index">
        <div className="main">
          <a href="/blog" className="back">{`< Blog`}</a>
          <div>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{__html: html}} />
            <p>
              {prev &&
                <Link to={prev.frontmatter.path}>
                  Previous: {prev.frontmatter.title}
                </Link>}
            </p>
            <p>
              {next &&
                <Link to={next.frontmatter.path}>
                  Next: {next.frontmatter.title}
                </Link>}
            </p>
          </div>
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
    </div>
  );
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        excerpt
      }
    }
  }
`;

export default Template;