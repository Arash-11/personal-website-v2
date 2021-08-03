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
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <title>Blogs</title>
      </Head>
      <Blogs posts={allPostsData} />
    </>
  )
};

export { getStaticProps, BlogsPage as default };
