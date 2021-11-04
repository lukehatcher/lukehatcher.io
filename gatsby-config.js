module.exports = {
  siteMetadata: {
    title: 'Gatsby + Node.js (TypeScript) API',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Luke Hatcher"s personal website',
        short_name: 'Luke hatcher',
        start_url: '/',
        icon: 'src/images/favicon-32x32.png',
      },
    },
  ],
};
