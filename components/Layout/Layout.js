import { useState } from 'react';
import Head from 'next/head';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ThemeContext from '../../contexts/ThemeContext';
import { container, lightMode } from './Layout.module.css';

const Layout = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleThemeMode = (storageData) => {
    storageData != null ? setIsLightMode(storageData) : setIsLightMode(!isLightMode);
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />        
        <meta name="author" content="Arash Nawyan" />
        <meta name="robots" content="index, follow" />

        <meta name="application-name" content="Arash Nawyan" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Arash Nawyan" />

        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <Nav toggleThemeMode={toggleThemeMode} />
      <div className={`${container} ${isLightMode ? lightMode : ''}`}>
        <ThemeContext.Provider value={ isLightMode }>
          {children}
          <Footer />
        </ThemeContext.Provider>
      </div>
    </>
  )
}

export default Layout
