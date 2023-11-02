import React, { useState } from 'react';
import Readings from './Readings';
import { getRandomInt } from '../deck';
import { getReading, getTestReading, getWildRideReading, getAdvancedReading } from '../api';
import Spinner from './Spinner';
import Transform from './Transform';

import styles from './App.module.scss';

function App() {
  const mrBonesBackgrounds = [
    styles.tarot,
    styles.spoopy,
    styles.book
  ];

  const [mrBonesBackground, setMrBonesBackground] = useState(getRandomInt(mrBonesBackgrounds.length))
  const [loadingText, setLoadingText] = useState(null);
  const [readings, setReadings] = useState(null);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [advancedMessage, setAdvancedMessage] = useState(false);
  function onGetWildRideReading() {
    const choices = [
      'So you want the ride to end? Let\'s see what the cards foretells...',
      'The ride has only just begun... ',
      'Are you asking for the end of the ride or the end of time?'
    ]
    setLoadingText(choices.at(getRandomInt(choices.length)));
    getWildRideReading().then(response => {
      setReadings(response.reading);
      setLoadingText(null);
    }).catch(error => {
      console.error(error);
      setLoadingText(null);
    })
  }

  function onGetReading() {
    const choices = [
      'I wonder... Which is more modest? Your future or your choice?',
      'Daring and adventurous.',
      'The simple mind thrives in a fallow environment.'
    ]
    setLoadingText(choices.at(getRandomInt(choices.length)));
    getTestReading().then(response => {
      setReadings(response.reading);
      setLoadingText(null);
    }).catch(error => {
      console.error(error);
      setLoadingText(null);
    })
  }

  function onGetAdvancedReading() {
    const choices = [
      'Are the cards enervated? Bewildered? Mayhaps they think nothing of you. ',
      'Can something endless truly be wasted?',
      'If your being does not stray my gaze, neither does the cards...'
    ]
    setLoadingText(choices.at(getRandomInt(choices.length)));
    getAdvancedReading(advancedMessage).then(response => {
      setReadings(response.reading);
      setLoadingText(null);
    }).catch(error => {
      console.error(error);
      setLoadingText(null);
    })
  }

  function onRestart() {
    if (mrBonesBackground === mrBonesBackgrounds.length - 1) {
      setMrBonesBackground(0);
    } else {
      setMrBonesBackground(mrBonesBackground + 1);
    }
    setReadings(null);
    closeAdvanced();
  }

  function closeAdvanced() {
    setAdvancedMessage(null);
    setShowAdvanced(false);
  }

  return (
    <div className={styles.layout}>
      <div className={`${styles.mrBones} ${mrBonesBackgrounds.at(mrBonesBackground)}`}>
      </div>
      <div className={styles.controls}>
        Hello stranger... and welcome to...
        <div className={styles.heading}>
          <h1>Mr. Bones'<br />Tarot Card<br />Readings</h1>
        </div>
        What can I do you for this fine evening?
        <div className={styles.choices}>
          <button onClick={onGetWildRideReading}>I want to get of Mr Bones' Wild Ride!</button>
          <button onClick={onGetReading}>A regular reading</button>
          <button onClick={() => setShowAdvanced(true)}>A personalized reading</button>
        </div>
      </div>

        <Transform isOpen={showAdvanced} translateHidden={'47vw'} translateVisible={'-47vw'}>
        <div className={`${styles.advanced} ${styles.skeletonCoaster}`}>
          So you believe the cards can be charmed? Then surely they can also be disenchanted, perhaps even provoked.
          <br />But don't let me thwart your folly... Try your best to get the in the cards favour, bend end twist your future until it breaks...
          <br />Tell me then, whom have I the pleasure of giving readings to?
          <textarea
            onChange={(e) => setAdvancedMessage(e.target.value)}
            placeholder='You are giving readings to X, a Y who enjoys Z...'
            rows={7}
          />
          <div className={styles.choices}>
            <button onClick={onGetAdvancedReading}>I'm done!</button>
            <button onClick={closeAdvanced}>I've changed my mind...</button>
          </div>
        </div>
        </Transform>

      {loadingText !== null && (
        <div className={styles.loading}>
          <div className={styles.loadingSpine}>
            <Spinner />
          </div>
          <div className={styles.loadingText}>
            <p>{loadingText}</p>
          </div>
        </div>
      )}
      {readings !== null && (
        <Readings readings={readings} onRestart={onRestart} />
      )}
    </div>
  );
};

export default App;