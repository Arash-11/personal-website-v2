import { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import Link from 'next/link';
import Image from 'next/image';
import {
  container,
  lightMode,
  portfolioTitle,
  portfolioCards,
  card,
  dash,
  seeMore,
  arrow } from './Portfolio.module.css';

const RecentProjects = () => {
  const isLightMode = useContext(ThemeContext);

  return (
    <section id="portfolio" className={`${container} ${isLightMode ? lightMode : ''}`}>
      <h2 className={portfolioTitle}>Recent projects</h2>
      <div className={portfolioCards}>
        <div className={card}>
          <Image
            src="/wts.jpg"
            layout="responsive"
            width={1365}
            height={655}
            alt="Picture of the 'Whats The Song' website" />
          <h3>What&apos;s The Song</h3>
          <div>
            <Link href="https://whatsthesong.vercel.app/">
              <a target="_blank" rel="noopener">view site</a>
            </Link>
            <span className={dash}>&mdash;</span>
            <Link href="https://github.com/Arash-11/_whatsthesong">
              <a target="blank" rel="noopener">view code</a>
            </Link>
          </div>
          <p>Quiz yourself or your friends & test how well you know your favorite songs.</p>
        </div>

        <div className={card}>
          <Image
            src="/mhn.png"
            layout="responsive"
            width={1365}
            height={655}
            alt="Picture of the 'Modern Hacker News' homepage" />
          <h3>Modern Hacker News</h3>
          <div>
            <Link href="https://modernhn.netlify.app/">
              <a target="_blank" rel="noopener">view site</a>
            </Link>
            <span className={dash}>&mdash;</span>
            <Link href="https://github.com/Arash-11/modern-hacker-news">
              <a target="_blank" rel="noopener">view code</a>
            </Link>
          </div>
          <p>Read Hacker News, but with a more &apos;modern&apos; UI.</p>
        </div>
      </div>

      <Link href="https://github.com/Arash-11">
        <a className={seeMore} target="_blank" rel="noopener">View more on GitHub</a>
      </Link>
      <span className={arrow}>→</span>
    </section>
  )
};

export default RecentProjects;
