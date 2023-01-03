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

  // todo: refactor current component
  return (
    <section id="portfolio" className={`${container} ${isLightMode ? lightMode : ''}`}>
      <h2 className={portfolioTitle}>Recent projects</h2>
      <div className={portfolioCards}>
        <div className={card}>
          <Image
            src="/wts.jpg"
            layout="responsive"
            width={1565}
            height={755}
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
            src="/ini-json.png"
            layout="responsive"
            width={1565}
            height={755}
            alt="Picture of the 'INI/JSON Converter' website" />
          <h3>INI/JSON Converter</h3>
          <div>
            <Link href="https://arash-11.github.io/ini-json-converter/">
              <a target="_blank" rel="noopener">view site</a>
            </Link>
            <span className={dash}>&mdash;</span>
            <Link href="https://github.com/Arash-11/ini-json-converter">
              <a target="blank" rel="noopener">view code</a>
            </Link>
          </div>
          <p>An online tool that converts INI format to JSON and vice versa.</p>
        </div>

        <div className={card}>
          <Image
            src="/vintage.png"
            layout="responsive"
            width={1565}
            height={755}
            alt="Picture of the 'Vintage' website" />
          <h3>Vintage</h3>
          <div>
            <Link href="https://vintage-image.vercel.app/">
              <a target="_blank" rel="noopener">view site</a>
            </Link>
            <span className={dash}>&mdash;</span>
            <Link href="https://github.com/Arash-11/Vintage">
              <a target="_blank" rel="noopener">view code</a>
            </Link>
          </div>
          <p>📜 Apply a vintage filter to your image.</p>
        </div>

        <div className={card}>
          <Image
            src="/rwm.png"
            layout="responsive"
            width={1565}
            height={755}
            alt="Picture of the 'Read with Meaning' website" />
          <h3>Read with Meaning</h3>
          <div>
            <Link href="https://rwm.vercel.app/">
              <a target="_blank" rel="noopener">view site</a>
            </Link>
            <span className={dash}>&mdash;</span>
            <Link href="https://github.com/Arash-11/Read-with-Meaning">
              <a target="blank" rel="noopener">view code</a>
            </Link>
          </div>
          <p>An online tool that helps you look up the meanings of words in the text that you're reading with just a click.</p>
        </div>

        <div className={card}>
          <Image
            src="/vite.png"
            layout="responsive"
            width={1565}
            height={755}
            alt="Picture of the NPM logo" />
          <h3>vite-starter</h3>
          <div>
            <Link href="https://www.npmjs.com/package/vite-starter">
              <a target="_blank" rel="noopener">view on NPM</a>
            </Link>
            <span className={dash}>&mdash;</span>
            <Link href="https://github.com/Arash-11/vite-starter">
              <a target="_blank" rel="noopener">view code</a>
            </Link>
          </div>
          <p>⚡ A CLI tool to create a boilerplate for vanilla TS + SCSS projects using Vite.</p>
        </div>

        <div className={card}>
          <Image
            src="/npm.jpg"
            layout="responsive"
            width={1565}
            height={755}
            alt="Picture of the NPM logo" />
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

        <div className={card}>
          <Image
            src="/mhn.png"
            layout="responsive"
            width={1565}
            height={755}
            alt="Picture of the 'Modern Hacker News' homepage" />
          <h3>Modern Hacker News</h3>
          <div>
            <Link href="https://modernhn.netlify.app/">
              <a target="_blank" rel="noopener">view site</a>
            </Link>
            <span className={dash}>&mdash;</span>
            <Link href="https://github.com/Arash-11/modern-hacker-news">
              <a target="blank" rel="noopener">view code</a>
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
