import { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import Link from 'next/link';
import Date from '../../utils/date';
import {
  recentBlogsContainer,
  blogsContainer,
  lightMode,
  title,
  postsWrapper,
  card,
  arrow,
  seeAllBlogs } from './BlogPosts.module.css';

const BlogPosts = ({ posts, isRecentBlogs }) => {
  const isLightMode = useContext(ThemeContext);

  return (
    isRecentBlogs
      ? 
        <section className={`${recentBlogsContainer} ${isLightMode ? lightMode : ''}`}>
          <h2 className={title}>Recent blogs</h2>
          <div className={postsWrapper}>
            {posts.map(({ id, date, title, description }) => (
              <Link href={`/posts/${id}`} key={id}>
                <a className={card}>
                  <Date dateString={date} />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </a>
              </Link>
            ))}
          </div>
          <Link href="/blogs">
            <a className={seeAllBlogs}>See all blogs</a>
          </Link>
          <span className={arrow}>→</span>
        </section>
      :
        <main className={`${blogsContainer} ${isLightMode ? lightMode : ''}`}>
          <h2 className={title}>Blogs</h2>
          <div className={postsWrapper}>
            {posts.map(({ id, date, title, description }) => (
              <Link href={`/posts/${id}`} key={id}>
                <a className={card}>
                  <Date dateString={date} />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </a>
              </Link>
            ))}
          </div>
        </main>
  )
};

export default BlogPosts;
