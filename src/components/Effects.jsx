import React from 'react';
import styles from '../styles/effects.module.css';

const Effects = () => {
  return (
    <>
      <div className={styles.snowContainer}>
        <div className={styles.snow}></div>
        <div className={styles.snow}></div>
        <div className={styles.snow}></div>
      </div>
      <div className={styles.thunderstorm}></div>
      <div className={styles.lightning}></div>
      <div className={styles.vignette}></div>
    </>
  );
};

export default Effects;
