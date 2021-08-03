import { useEffect, useState } from 'react';
import Link from 'next/link';
import { RiSunLine, RiMoonFill } from 'react-icons/ri';
import { nav, hideNav, lightMode, logo, colorToggleBtn } from './Nav.module.css';

const Nav = ({ toggleThemeMode }) => {
  const [hasScrolledDown, setHasScrolledDown] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  const handleClick = () => {
    setIsLightMode(!isLightMode);
    // `isLightMode` in the next line will be an outdated value due to stale closures, which is why
    // we want to pass in the opposite of the old value to local storage.
    localStorage.setItem('isLightMode', !isLightMode);
    toggleThemeMode();
  };

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem('isLightMode'));
    if (storageData == null) return;
    setIsLightMode(storageData);
    toggleThemeMode(storageData);
  }, [toggleThemeMode]);

  useEffect(() => {
    let lastScrollPosition = window.scrollTop;
    window.addEventListener('scroll', () => {
      setHasScrolledDown(lastScrollPosition < window.scrollY && window.scrollY > 20);
      lastScrollPosition = window.scrollY;
    });
  }, []);

  return (
      <nav className={`${nav} ${hasScrolledDown ? hideNav : ''} ${isLightMode ? lightMode : ''}`}>
        <ul>
          <li className={logo}>
            <Link href="/">a.</Link>
          </li>
          <li>
            <button className={colorToggleBtn} onClick={handleClick}>
              {isLightMode ? <RiMoonFill /> : <RiSunLine />}
            </button>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
  );
};

export default Nav;
