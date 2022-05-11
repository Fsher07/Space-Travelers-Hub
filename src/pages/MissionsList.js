import React from 'react';
import { useSelector } from 'react-redux';
import Mission from './Mission';
import styles from './MissionsList.module.css';

const MissionsList = () => {
  const missions = useSelector((state) => state.missions);

  return (
    <ul className="missionsList">
      <li className={styles.missionHeader}>
        <h3>Mission</h3>
        <h3>Description</h3>
        <h3>Status</h3>
      </li>
      {
        missions.length > 0
          ? missions.map((mission) => (
            <Mission
              key={mission.id}
              mission={mission}
            />
          ))
          : ''
      }
    </ul>
  );
};

export default MissionsList;
