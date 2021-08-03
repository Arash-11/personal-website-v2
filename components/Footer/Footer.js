import { useRef, useState, useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import Link from 'next/link';
import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { bgBlurred, footer, lightMode, linkWrapper, link, icons, copyright } from './Footer.module.css';

const Footer = () => {
  const isLightMode = useContext(ThemeContext);
  const linkRef = useRef();
  const [linkEl, setLinkEl] = useState(null);
  const [blurBg, setBlurBg] = useState(false);

  const handleMouseMove = (event) => {
    setBlurBg(true);
    setLinkEl(linkRef.current);
    const targetEl = linkRef.current,
          rotateLimit = 10,
          targetElWidth = targetEl.offsetWidth,
          targetElHeight = targetEl.offsetHeight,
          { top, left } = targetEl.getBoundingClientRect(),
          centerX = left + targetElWidth / 2,
          centerY = top + targetElHeight / 2,
          mouseX = event.clientX - centerX,
          mouseY = event.clientY - centerY,
          degreeX = (-rotateLimit * mouseY / (targetElHeight/2)).toFixed(),
          degreeY = (rotateLimit * mouseX / (targetElWidth/2)).toFixed(),
          rotateX = Math.min(degreeX, 20),
          rotateY = Math.min(degreeY, 20);
    targetEl.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    setBlurBg(false);
    if (linkEl) linkEl.style.transform = '';
  };

  return (
    <>
      <div className={`${blurBg ? bgBlurred : ''} ${isLightMode ? lightMode : ''}`}></div>
      <footer id="contact" className={`${footer} ${isLightMode ? lightMode : ''}`}>
        <Link href="mailto:arashnawy@gmail.com">
          <a className={linkWrapper} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <div className={link} ref={linkRef}>
              Let&apos;s chat.<br />
              <span>Send an email.</span>
            </div>
          </a>
        </Link>
        <div className={icons}>
          <Link href="https://twitter.com/arash11gt" target="_blank">
            <a><AiOutlineTwitter /></a>
          </Link>
          <Link href="https://github.com/Arash-11" target="_blank">
            <a><AiFillGithub /></a>
          </Link>
          <Link href="https://linkedin.com/in/arash-nawyan/" target="_blank">
            <a><AiFillLinkedin /></a>
          </Link>
        </div>
        <p className={copyright}>© Arash Nawyan 2021</p>
      </footer>
    </>
  )
};

export default Footer;
