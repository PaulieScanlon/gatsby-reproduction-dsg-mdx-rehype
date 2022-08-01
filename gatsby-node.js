const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  if (node.internal.type === 'Mdx') {
    createNodeField({
      node,
      name: 'slug',
      value: createFilePath({ node, getNode })
    });
  }
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: { allMdx }
  } = await graphql(`
    query {
      allMdx {
        nodes {
          id
          fields {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  allMdx.nodes.forEach((node) => {
    const {
      id,
      fields: { slug }
    } = node;

    createPage({
      path: slug,
      component: `${path.resolve(`./src/templates/template.js`)}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: id
      },
      defer: true
    });
  });
};
