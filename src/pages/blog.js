import React from 'react';
import Link from 'gatsby-link';
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './blog.scss'

const BlogPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className="index">
      <div className="main">
        <a href="/" className="back">{`< Back`}</a>
        <h2 className="blog-title">Writings</h2>
        {posts.map(({ node: post }) => {
          const { frontmatter } = post;
          return (
            <div key={frontmatter.path} className="blog-post">
              <h2>
                <Link to={frontmatter.path}>
                  {frontmatter.title}
                </Link>
              </h2>
              <p className="blog-date">{frontmatter.date}</p>
              <div className="blog-excerpt" dangerouslySetInnerHTML={{__html: post.excerpt}} />
            </div>
          );
        })}
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
  );
};

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            excerpt
          }
        }
      }
    }
  }
`;

export default BlogPage;