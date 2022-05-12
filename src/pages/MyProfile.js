import React from 'react';
import { useSelector } from 'react-redux';
import ProfileMissions from '../components/ProfileMissions';
import RocketProfile from '../components/RocketProfile';
import styles from './MyProfile.module.css';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions);
  const profileMission = missions.filter((mission) => mission.reserved === true);
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
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
        {reservedRockets.length > 0 ? (
          <span>
            {reservedRockets.map((rocket) => (
              <RocketProfile
                key={rocket.id}
                id={rocket.id}
                name={rocket.rocket_name}
              />
            ))}
          </span>
        ) : (
          <span className="nothing"><span>You have not reserved any rocket</span></span>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
