module.exports = {
  siteMetadata: {
    title: `Monmouth Rambling and Hillwalking Club`,
    description: `Monmouth Rambling and Hillwalking Club is a long established walking club based in Monmouth. We walk every Sunday in our beautiful local countryside.`,
    author: `@clarkie`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Monmouth Rambling and Hillwalking Club`,
        short_name: `starter`,
        start_url: `https://monmouthwalkers.com`,
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: `minimal-ui`,
        icon: `src/images/dragon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
