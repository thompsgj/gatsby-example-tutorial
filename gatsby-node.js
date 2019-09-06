const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  //Destructure graphql result to first level "data"
  const { data } = await graphql(`
    query {
      tours: allContentfulTourExample {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.tours.edges.forEach(({ node }) => {
    createPage({
      path: `tours/${node.slug}`,
      component: path.resolve("./src/templates/tour-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
