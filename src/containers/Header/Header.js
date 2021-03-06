import React from 'react';

import { motion } from 'framer-motion';

import './Header.scss';
import { AppWrap } from '../../wrapper';

import HeaderImgDark from '../../assets/headerDark.webp';
import HeaderImgLight from '../../assets/headerLight.webp';
import ThemeContext from '../../contexts/ThemeContext';

const Header = () => {
  return (
    <header className="app__header app__flex" id="home">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Abdulrhman Kotb</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Full-Stack Web Developer</p>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">MERN-Stack Developer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <ThemeContext.Consumer>
          {({ theme }) => (
            <img
              src={theme === 'dark' ? HeaderImgDark : HeaderImgLight}
              alt="web developer"
            />
          )}
        </ThemeContext.Consumer>
      </motion.div>
    </header>
  );
};

export default AppWrap(Header, 'home');
