import React from 'react';
import { Link } from 'gatsby';

const Page = () => {
  return (
    <main>
      <h1>Index</h1>
      <ul>
        <li>
          <Link to="/hello-world/">Hello World</Link>
        </li>
      </ul>
    </main>
  );
};

export default Page;
