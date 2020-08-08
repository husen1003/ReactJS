import Head from './components/Head';
import Link from 'next/link';
import Home from './home';
import { connect } from 'react-redux';

const Blog = () => {
  return (
    <>
      <Home />
      <Head
        title="Blog"
        description="This is a blog page"
        OGtitle="This is a blog"
      />
      <h1>This is a blog page Created by Husain</h1>
      <Link href="/">
        <a>Return to home page</a>
      </Link>
    </>
  );
};

export default Blog;
