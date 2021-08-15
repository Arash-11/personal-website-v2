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
          Previously working with cars, I am now a self-taught web developer working in the Shopify eco-system during the day and tinkering with new development technologies at night.
          <br />
          <br />
          When I'm not in front of my computer, you can find me reading, playing football (aka soccer), or watching anime.
        </p>
      </main>
    </>
  )
};

export default Intro;
