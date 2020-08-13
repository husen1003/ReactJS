import Head from './components/Head';
import Link from 'next/link';
import Header from './components/header';
import { connect } from 'react-redux';

const Blog = () => {
  return (
    <>
      <Head
        title="Blog"
        description="This is a blog page"
        OGtitle="This is a blog"
      />
      <Header />
      <main className="mt-12">
          <h1>This is a blog page Created by Husain</h1>
          <Link href="/">
            <a>Return to home page</a>
          </Link>
      </main>    
    </>
  );
};

export default Blog;
