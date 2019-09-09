module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `src`,
        path: `${__dirname}/src`,
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
        trackingId: "UA-60402110-1",
        head: true
      }
    },
  ],
  siteMetadata: {
    title: 'Kevin Guebert',
    description: 'Full stack developer',
    keywords: 'full stack, developer, portfolio, personal website',
    url: 'https://www.kevinguebert.com'
  }
};
