import Head from 'next/head';
import Intro from '../components/Intro/Intro';
import BlogPosts from '../components/BlogPosts/BlogPosts';
import Portfolio from '../components/Portfolio/Portfolio';
import { getSortedPostsData } from '../utils/posts';

const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
};

const Home = ({ allPostsData }) => {
  const recentBlogs = allPostsData.slice(0, 3);
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="blog,web development,software,web dev,tech,writing,shopify,ecommerce,nextjs"
        />
        <meta name="description" content="Hi, I am a web developer working in the Shopify eco-system." />
        <title>arash &mdash; web developer</title>
      </Head>
      <Intro />
      <BlogPosts posts={recentBlogs} isRecentBlogs={true} />
      <Portfolio />
    </>
  )
};

export { getStaticProps, Home as default };
