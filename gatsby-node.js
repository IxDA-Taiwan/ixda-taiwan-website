const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onPreInit = () => {
  console.log("\x1b[32mhello world")

  const fs = require("fs")
  const https = require("https")
  const path = require("path")

  let request = https.get(
    "https://hackmd.io/5qcy80XiTgOh9DR_whQOWw/download",
    function (response) {
      let file = fs.createWriteStream(
        path.resolve(__dirname, "pages/about/index.md")
      )
      response.pipe(file)
    }
  )

  request = https.get(
    "https://hackmd.io/tk1tzgwORT6tcRZ1OIQ60Q/download",
    function (response) {
      let file = fs.createWriteStream(
        path.resolve(__dirname, "pages/members/index.md")
      )
      response.pipe(file)
    }
  )

  request = https.get(
    "https://hackmd.io/dPsG-7D1So2vE_-wiQCHqQ/download",
    function (response) {
      let file = fs.createWriteStream(
        path.resolve(__dirname, "pages/sponsor/index.md")
      )
      response.pipe(file)
    }
  )

  request = https.get(
    "https://hackmd.io/6ipwF5uBSSG5nZZ0PRzdrg/download",
    function (response) {
      let file = fs.createWriteStream(
        path.resolve(__dirname, "pages/services/index.md")
      )
      response.pipe(file)
    }
  )

  request = https.get(
    "https://hackmd.io/R28h4LzERPaiW5CdNyf_yg/download",
    function (response) {
      let file = fs.createWriteStream(
        path.resolve(__dirname, "pages/contact/index.md")
      )
      response.pipe(file)
    }
  )
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    const fileNode = getNode(node.parent)
    const source = fileNode.sourceInstanceName
    const separtorIndex = ~slug.indexOf("--") ? slug.indexOf("--") : 0
    const shortSlugStart = separtorIndex ? separtorIndex + 2 : 0

    if (source !== "parts") {
      createNodeField({
        node,
        name: `slug`,
        value: `${separtorIndex ? "/" : ""}${slug.substring(shortSlugStart)}`,
      })
    }
    createNodeField({
      node,
      name: `prefix`,
      value: separtorIndex ? slug.substring(1, separtorIndex) : "",
    })
    createNodeField({
      node,
      name: `source`,
      value: source,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    // const postTemplate = path.resolve("./src/templates/PostTemplate.js");
    const pageTemplate = path.resolve("./src/templates/pageTemplate.js")
    // const categoryTemplate = path.resolve("./src/templates/CategoryTemplate.js");

    // Do not create draft post files in production.
    let activeEnv =
      process.env.ACTIVE_ENV || process.env.NODE_ENV || "development"
    console.log(`Using environment config: '${activeEnv}'`)
    let filters = `filter: { fields: { slug: { ne: null } } }`
    if (activeEnv == "production")
      filters = `filter: { fields: { slug: { ne: null } , prefix: { ne: null } } }`

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              ` +
          filters +
          `
              sort: { fields: [fields___prefix], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  id
                  fields {
                    slug
                    prefix
                    source
                  }
                  frontmatter {
                    title
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const items = result.data.allMarkdownRemark.edges

        // Create category list
        // const categorySet = new Set();
        // items.forEach(edge => {
        //   const {
        //     node: {
        //       frontmatter: { category }
        //     }
        //   } = edge;

        //   if (category && category !== null) {
        //     categorySet.add(category);
        //   }
        // });

        // Create category pages
        // const categoryList = Array.from(categorySet);
        // categoryList.forEach(category => {
        //   createPage({
        //     path: `/category/${_.kebabCase(category)}/`,
        //     component: categoryTemplate,
        //     context: {
        //       category
        //     }
        //   });
        // });

        // Create posts
        // const posts = items.filter(item => item.node.fields.source === "posts");
        // posts.forEach(({ node }, index) => {
        //   const slug = node.fields.slug;
        //   const next = index === 0 ? undefined : posts[index - 1].node;
        //   const prev = index === posts.length - 1 ? undefined : posts[index + 1].node;
        //   const source = node.fields.source;

        //   createPage({
        //     path: slug,
        //     component: postTemplate,
        //     context: {
        //       slug,
        //       prev,
        //       next,
        //       source
        //     }
        //   });
        // });

        // and pages.
        const pages = items.filter(item => item.node.fields.source === "pages")
        pages.forEach(({ node }) => {
          const slug = node.fields.slug
          const source = node.fields.source

          createPage({
            path: slug,
            component: pageTemplate,
            context: {
              slug,
              source,
            },
          })
        })
      })
    )
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  if (page.path === "/") {
    page.context.hero = true
    createPage(page)
  }
}
