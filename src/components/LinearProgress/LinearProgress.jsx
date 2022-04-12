import React from 'react';

import styles from './styles.module.css';

const LinearProgress = ({ loading }) => {
  return (
      <>
      {loading && <div className={styles.container}>
          <span className={styles.linear}></span>
      </div>}
      </>
  );
}

export default LinearProgress;