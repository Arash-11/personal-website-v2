import Posts from '../../components/Posts/Posts';
import { getAllPostIds, getPostData } from '../../utils/posts';

const getStaticPaths = () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
};

const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  };
};

const Post = ({ postData }) => {
  const { title, date, contentHtml } = postData;
  return (
    <Posts
      title={title}
      date={date}
      contentHtml={contentHtml} />
  )
};

export { Post as default, getStaticPaths, getStaticProps };
