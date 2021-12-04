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
          <h3>CountAnimator</h3>
          <div>
            <Link href="https://www.npmjs.com/package/countanimator">
              <a target="_blank" rel="noopener">view on NPM</a>
            </Link>
            <span className={dash}>&mdash;</span>
            <Link href="https://github.com/Arash-11/CountAnimator">
              <a target="_blank" rel="noopener">view code</a>
            </Link>
          </div>
          <p>A lightweight and dependency-free number counter package that animates numbers incrementing or decrementing.</p>
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
