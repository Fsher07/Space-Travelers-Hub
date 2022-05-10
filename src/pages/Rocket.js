import React from 'react';
/* eslint-disable react/prop-types */
const Rocket = (props) => {
  const { rocket } = props;
  return (
    <div>
      <img src={rocket.flickr_images} alt={`${rocket.rocket_name}`} />
      <h2>{rocket.rocket_name}</h2>
      <p>{rocket.description}</p>
    </div>
  );
};

export default Rocket;
