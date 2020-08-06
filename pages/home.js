import React from 'react';
import Head from './components/Head';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <Head />

      <main>
        <h1>Hello from the Next.js</h1>
        <Link href="/blogs">
          <a>Blogs</a>
        </Link>
      </main>

      <footer>Made with ❤ by Burhan</footer>
    </div>
  );
};

export default Home;
