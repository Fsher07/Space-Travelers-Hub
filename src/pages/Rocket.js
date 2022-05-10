import React from 'react';
import { useDispatch } from 'react-redux';
import { updateRockets } from '../redux/rockets';
/* eslint-disable react/prop-types */
const Rocket = (props) => {
  const { rocket } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateRockets(rocket.id));
  };

  return (
    <div className="rocket d-flex ">
      <img className="rocket-image" src={rocket.flickr_images} alt={`${rocket.rocket_name}`} />
      <div className="rocket-details d-col-flex">
        <h2>{rocket.rocket_name}</h2>
        <p>{rocket.description}</p>
        <button type="button" onClick={handleClick}>Reserve Rocket</button>
      </div>
    </div>
  );
};

export default Rocket;
