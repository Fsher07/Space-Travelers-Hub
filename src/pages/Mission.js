import React from 'react';
import PropTypes from 'prop-types';
import styles from './Mission.module.css';

const Mission = (props) => {
  const { mission } = props;
  const {
    name, description,
  } = mission;
  return (
    <li className={styles.missionRow}>
      <h3>{name}</h3>
      <p>{description}</p>
    </li>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Mission;
