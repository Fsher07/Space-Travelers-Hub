import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);

  return (
    <div className="rockets d-col-flex">
      {
        rockets.length > 0
          ? rockets.map((rocket) => (
            <Rocket
              key={rocket.id}
              rocket={rocket}
            />
          ))
          : ''
      }
    </div>
  );
};

export default Rockets;
