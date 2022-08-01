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
      component: path.join(__dirname, `src/templates/template.js`),
      context: {
        id: id
      },
      defer: true
    });
  });
};
