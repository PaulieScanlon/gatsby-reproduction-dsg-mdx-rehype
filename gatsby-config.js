module.exports = {
  siteMetadata: {
    title: 'gatsby-reproduction-dsg-mdx-rehype'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        rehypePlugins: [require('rehype-slug'), [require('rehype-autolink-headings'), { behavior: 'wrap' }]]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/`
      }
    }
  ]
};
