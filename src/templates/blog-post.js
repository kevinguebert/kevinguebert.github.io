import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import '../pages/style.scss'
import './style.scss'

const Template = ({data, location, pathContext}) => {
  const {markdownRemark: post} = data;
  const {frontmatter, html} = post;
  const {title, date} = frontmatter;
  const {next, prev} = pathContext;

  return (
    <div>
      <Helmet title={`${title} - My Blog`} />
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