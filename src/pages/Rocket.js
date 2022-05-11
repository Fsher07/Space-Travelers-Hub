import React from 'react';
/* eslint-disable react/prop-types */
const Rocket = (props) => {
  const { rocket } = props;
  return (
    <div className="rocket d-flex ">
      <img className="rocket-image" src={rocket.flickr_images} alt={`${rocket.rocket_name}`} />
      <div className="rocket-details d-col-flex">
        <h2>{rocket.rocket_name}</h2>
        <p>{rocket.description}</p>
        <button type="button">Reserve Rocket</button>
      </div>
    </div>
  );
};

export default Rocket;
