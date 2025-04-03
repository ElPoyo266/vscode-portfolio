import { useState } from 'react';
import AboutCode from '../components/AboutCode';
import styles from '../styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>/* About Me */</h3>
        <AboutCode />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
