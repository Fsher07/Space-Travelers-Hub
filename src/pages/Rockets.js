import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rockets';
import Rocket from './Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <div>
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
