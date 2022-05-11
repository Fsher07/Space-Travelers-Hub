import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './Mission.module.css';
import { joinMission, leaveMission } from '../redux/missions';

const Mission = (props) => {
  const dispatch = useDispatch();
  const { mission } = props;
  const {
    id, name, description,
  } = mission;
  const handleMissionClick = () => {
    if (mission.reserved === true) {
      dispatch(leaveMission(id));
    } else {
      dispatch(joinMission(id));
    }
  };
  return (
    <li className={styles.missionRow}>
      <h3>{name}</h3>
      <p>{description}</p>
      {mission.reserved === true ? (
        <div className={styles.badge}>
          <span className={styles.badgeActive}>Active Member</span>
          <button type="button" className={styles.btnLeave} onClick={handleMissionClick}>Leave Mission</button>
        </div>
      ) : (
        <div className={styles.badge}>
          <span className={styles.badgeInActive}>NOT A MEMBER</span>
          <button type="submit" onClick={handleMissionClick}>Join Mission</button>
        </div>
      )}
    </li>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Mission;
