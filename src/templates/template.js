import React from 'react';
import { graphql, Link } from 'gatsby';

const Page = ({
  data: {
    mdx: {
      frontmatter: { title },
      tableOfContents
    }
  },
  children
}) => {
  return (
    <main>
      <Link to="/">Back</Link>
      <h1>{title}</h1>
      {children}
      <ul>
        {tableOfContents && tableOfContents.items
          ? tableOfContents.items.map((item, index) => {
              const { title } = item;
              return <li>{title}</li>;
            })
          : null}
      </ul>
      <pre>{JSON.stringify(tableOfContents)}</pre>
    </main>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      tableOfContents
    }
  }
`;

export default Page;
