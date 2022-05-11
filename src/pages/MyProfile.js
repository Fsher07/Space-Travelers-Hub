import React from 'react';
import { useSelector } from 'react-redux';
import ProfileMissions from './Profilemisses';

const MyProfileMission = () => {
  const missions = useSelector((state) => state.missions);
  const profileMission = missions.filter((mission) => mission.reserved === true);
  return (
    <div>
      <h1>My Profile</h1>
      {profileMission.length ? (
        <span>
          {profileMission.map((item) => (
            <ProfileMissions
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
            />
          ))}
        </span>
      ) : (
        <span className="empty"><span>You have not joined any missions</span></span>
      )}
    </div>
  );
};

export default MyProfileMission;
