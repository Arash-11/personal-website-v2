import { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import { container, lightMode, introTitle, introText } from './Intro.module.css';

const Intro = () => {
  const isLightMode = useContext(ThemeContext);

  return (
    <>
      <main className={`${container} ${isLightMode ? lightMode : ''}`}>
        <h2 className={introTitle}>Whoami</h2>
        <p className={introText}>
          Hi, I'm Arash Nawyan!
          <br />
          <br />
          Previously working with cars, I am now a self-taught web developer working in the Shopify eco-system.
          <br />
          <br />
          I mainly use HTML, CSS, JavaScript, and Liquid for work, but I'm comfortable working with other frameworks/libraries/tools as well such as React, jQuery, Firebase, webpack, Vite, etc.
          <br />
          <br />
          I have also dabbled with Next.js, which is what this site is built with, and server-side programming using Node, Express, and Postgres.
          <br />
          <br />
          When I'm not coding, you can find me reading a book, watching anime, working out, learning math, or scrolling on Twitter.
        </p>
      </main>
    </>
  )
};

export default Intro;
