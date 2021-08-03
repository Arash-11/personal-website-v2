import { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import Head from 'next/head';
import Date from '../../utils/date';
import { article, lightMode, content } from './Posts.module.css';

const Posts = ({ title, date, contentHtml }) => {
  const isLightMode = useContext(ThemeContext);
  
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <article className={`${article} ${isLightMode ? lightMode : ''}`}>
        <h1>{title}</h1>
        <Date dateString={date} />
        <div className={content} dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </>
  )
};

export default Posts;
