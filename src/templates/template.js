import React from 'react';
import { graphql, Link } from 'gatsby';

const Page = ({
  data: {
    mdx: {
      frontmatter: { title }
    }
  },
  children
}) => {
  console.log(children);
  return (
    <main>
      <Link to="/">Back</Link>
      <h1>{title}</h1>
      {children}
    </main>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;

export default Page;
