module.exports = {
  siteMetadata: {
    title: `IxDA Taiwan 台灣互動設計協會`,
    description: `我們是致力於互動設計專業領域的國際組織「互動設計協會」的台灣分支，專注於互動設計從業人員有關的議題。 秉持國際互動協會宗旨，以台灣在地社群的力量，彙整來自產業、政府、學界的能量，提升台灣設計產業及產品服務體驗。`,
    author: `@duncanhsieh`,
    siteUrl: "https://www.ixda.org.tw/",
    facebook: {
      appId: process.env.FB_APP_ID ? process.env.FB_APP_ID : "",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassRuleTest: /\.s(a|c)ss$/,
        sassRuleModulesTest: /\.module\.s(a|c)ss$/,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        include: /svg-icons/,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-line-breaks`,
          `gatsby-plugin-sharp`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              backgroundColor: "transparent",
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 2em`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: "gatsby-remark-emojis",
            options: {
              // Deactivate the plugin globally (default: true)
              active: true,
              // Add a custom css class
              class: "emoji-icon",
              // Select the size (available size: 16, 24, 32, 64)
              size: 64,
              // Add custom styles
              styles: {
                display: "inline",
                margin: "0",
                "margin-top": "1px",
                position: "relative",
                top: "5px",
                width: "25px",
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/pages/`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `ixda-taiwan`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "staff",
          "session",
          "event",
          "speaker",
        ],
        queryLimit: 1000,
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID || "UA-177230648-1",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
