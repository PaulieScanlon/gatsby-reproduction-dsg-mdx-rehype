import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

const Page = ({
  data: {
    mdx: {
      frontmatter: { title },
      body
    }
  }
}) => {
  return (
    <main>
      <Link to="/">Back</Link>
      <h1>{title}</h1>
      <MDXProvider>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </main>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }
`;

export default Page;
