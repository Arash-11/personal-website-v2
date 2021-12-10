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
          I mostly work with JavaScript and Liquid, but I also enjoy getting my hands dirty with React, Node, Express, Firebase, PostgreSQL, and any other tool/language/framework suitable for the job.
          <br />
          <br />
          When I'm not coding, you can find me writing a blog post, reading a book, or watching anime. I've also recently started getting into calisthenics and learning math (yes, I'm a proud nerd).
        </p>
      </main>
    </>
  )
};

export default Intro;
