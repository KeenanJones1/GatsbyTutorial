/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title: 'Gatsby Tutorial',
    description: 'First Gatsby Project',
    author: 'Keenan',
    data: ['item 1', 'item 2'],
    person: {name: "Keenan", age: 27}
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },`gatsby-transformer-sharp`, `gatsby-plugin-sharp`
  ]
}
