import React from 'react';
import { useSelector } from 'react-redux';
import ProfileMissions from '../components/ProfileMissions';
import styles from './MyProfile.module.css';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions);
  const profileMission = missions.filter((mission) => mission.reserved === true);
  return (
    <div className={styles.container}>
      <div>
        <h2>My Missions</h2>
        {profileMission.length ? (
          <span>
            {profileMission.map((item) => (
              <ProfileMissions
                key={item.id}
                id={item.id}
                name={item.name}
              />
            ))}
          </span>
        ) : (
          <span className="nothing"><span>You have not joined any missions</span></span>
        )}
      </div>
      <div>
        <h2>My Rockets</h2>
      </div>
    </div>
  );
};

export default MyProfile;
