import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="my-profile d-col-flex">
      <h2>My Rockets</h2>
      <div className="my-profile-display d-col-flex">
        {
          reservedRockets.map((rocket) => (
            <h3 key={rocket.id}>
              {rocket.rocket_name}
            </h3>
          ))
        }
      </div>
    </div>
  );
};

export default MyProfile;
