import Head from './components/Head';
import Link from 'next/link';

const Blog = () => {
  return (
    <div>
      <Head
        title="Blog"
        description="This is a blog page"
        OGtitle="This is a blog"
      />
      <h1>This is a blog page</h1>
      <Link href="/">
        <a>Return to home page</a>
      </Link>
    </div>
  );
};

export default Blog;
