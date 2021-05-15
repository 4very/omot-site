const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    
    const photoTemplate = path.resolve("./src/templates/photopost.js")
    const res = await graphql(`query {
        allContentfulPhotopost {
          edges {
            node {
              slug
            }
          }
        }
      }`) 
    
      res.data.allContentfulPhotopost.edges.forEach((edge) => {
          createPage({
              component: photoTemplate,
              path: `/photo/${edge.node.slug}`,
              context: {
                  slug: edge.node.slug
              }
          })
      })
}