import React from 'react';

import spineSign from '../../assets/images/craiyon_164452_intricate_black_and_white_ink_drawing_of_a_spine_sign__white_on_transparent_background.png';
import styles from './Spinner.module.scss';

function Spinner() {
  return (
    <img className={styles.rotate} src={spineSign} alt='spinner' />
  );
};

export default Spinner;