module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,600`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "<your-tracking-id-here>",
        head: true
      }
    },
  ],
  siteMetadata: {
    title: 'Kevin Guebert',
    description: 'Full stack product enginner',
    keywords: 'full stack, product enginner, portfolio, personal website',
    url: 'https://www..com'
  }
};
