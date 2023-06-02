const path = require('path')

const resolveConfig = require('tailwindcss/resolveConfig')
const tailwindConfig = require('./tailwind.config.js')

const fullConfig = resolveConfig(tailwindConfig)

if (process.env.NODE_ENV !== 'production') require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Newsletter to Kindle`,
    description: `Send newsletters directly to your Kindle device`,
    author: `@newslettertokindle`,
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: process.env.GOOGLE_ANALYTICS_ID,
    //     anonymize: true,
    //     respectDNT: true,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-google-tagmanager`,
    //   options: {
    //     id: process.env.GOOGLE_TAG_ID,
    //   },
    // },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: process.env.GOOGLE_TAG_ID,
        head: true,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: process.env.FACEBOOK_PIXEL,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `newsletter-to-kindle`,
        short_name: `n2k`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.black,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ['Lato:regular,bold,light'],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-offline`,
  ],
}
