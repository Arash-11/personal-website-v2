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
          Hi, I'm Arash!
          <br />
          <br />
          I'm passionate about all things related to computers, software, the web, anime, soccer, and books.
          <br />
          <br />
          Here you'll find the occassional blog posts that I write, along with any projects that I work on.
          <br />
          <br />
          Feel free to hit me up if you want to work on a project together or if you just want to chat!
        </p>
      </main>
    </>
  )
};

export default Intro;
