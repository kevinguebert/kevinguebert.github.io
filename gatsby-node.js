var extractTextWebpackPlugin = require('extract-text-webpack-plugin');
const path = require('path');

exports.modifyWebpackConfig = function ({ config, stage }) {
  config.merge({
    postcss(wp) {
      return [
        require('postcss-cssnext')({ browsers: ['last 2 versions', '> 2%', 'ie 9'] }),
      ]
    },
  })

  if (stage === 'build-css') {
    config.removeLoader('sass');
    config.loader('sass', {
      test: /\.(sass|scss)/,
      exclude: /\.module\.(sass|scss)$/,
      loader: extractTextWebpackPlugin.extract(['css?minimize', 'postcss', 'sass']),
    })
  }

  if (stage === 'develop') {
    config.removeLoader('sass');
    config.loader('sass', {
      test: /\.(sass|scss)/,
      exclude: /\.module\.(sass|scss)$/,
      loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap'],
    })
  }

  return config
};

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators;
  const blogPostTemplate = path.resolve (`src/templates/blog-post.js`);

  return graphql (
    `{
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            date
            path
            title
            excerpt
            tags
          }
        }
      }
    }
  }`
  ).then (result => {
    if (result.errors) {
      return Promise.reject (result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach (({node}, index) => {
      createPage ({
        path: node.frontmatter.path,
        component: blogPostTemplate,
      });
    });
  });
};