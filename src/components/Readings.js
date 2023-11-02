import React, { useEffect, useState } from 'react';
import { getCardFileName } from '../deck';
import back from '../../assets/images/cards/Waite–Smith_Tarot_Roses_and_Lilies_cropped.jpg';

import styles from './Readings.module.scss';

function Readings({ readings, onRestart }) {
  const [showPast, setShowPast] = useState(false);
  const [showPresent, setShowPresent] = useState(false);
  const [showFuture, setShowFuture] = useState(false);
  const [showCombined, setShowCombined] = useState(false);

  const cardFlipTime = 20000;

  useEffect(() => {
    setTimeout(() => setShowPast(true), 0.25 * cardFlipTime);
  }, []);

  useEffect(() => {
    if (!showPast) {
      return;
    }
    setTimeout(() => setShowPresent(true), cardFlipTime);
  }, [showPast]);

  useEffect(() => {
    if (!showPresent) {
      return;
    }
    setTimeout(() => setShowFuture(true), cardFlipTime);
  }, [showPresent]);

  useEffect(() => {
    if (!showFuture) {
      return;
    }
    setTimeout(() => setShowCombined(true), cardFlipTime);
  }, [showFuture]);

  useEffect(() => {
    if (!showCombined) {
      return;
    }
    setTimeout(() => onRestart(), 1.5 * cardFlipTime);
  }, [showCombined]);

  return (
    <div className={styles.readings}>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={`${styles.flipBoxInner} ${showPast && styles.flip}`}>
            <div className={styles.back}>
              <img src={back} alt='' />
            </div>
            <div className={styles.front}>
              <img src={`/deck/${getCardFileName(readings.past.name)}`} alt={readings.past.name} />
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={`${styles.flipBoxInner} ${showPresent && styles.flip}`}>
            <div className={styles.back}>
              <img src={back} alt='' />
            </div>
            <div className={styles.front}>
              <img src={`/deck/${getCardFileName(readings.present.name)}`} alt={readings.present.name} />
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={`${styles.flipBoxInner} ${showFuture && styles.flip}`}>
            <div className={styles.back}>
              <img src={back} alt='' />
            </div>
            <div className={styles.front}>
              <img src={`/deck/${getCardFileName(readings.future.name)}`} alt={readings.future.name} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.readingText}>
        {showPast && !showPresent && !showFuture && !showCombined && (
          <p>{readings.past.reading}</p>
        )}
        {showPast && showPresent && !showFuture && !showCombined && (
          <p>{readings.present.reading}</p>
        )}
        {showPast && showPresent && showFuture && !showCombined && (
          <p>{readings.future.reading}</p>
        )}
        {showPast && showPresent && showFuture && showCombined && (
          <p>{readings.combined}</p>
        )}
      </div>
    </div>
  );
};

export default Readings;