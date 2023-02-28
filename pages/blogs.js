import Head from 'next/head';
import Blogs from '../components/BlogPosts/BlogPosts';
import { getSortedPostsData } from '../utils/posts';

const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
};

const BlogsPage = ({ allPostsData }) => {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="blog,blogs,blogging,web development,software,web dev,tech,writing,rust,low level,systems,cs,computer science"
        />
        <meta name="description" content="Collection of all of my blog posts." />
        <title>Blogs</title>
      </Head>
      <Blogs posts={allPostsData} />
    </>
  )
};

export { getStaticProps, BlogsPage as default };
