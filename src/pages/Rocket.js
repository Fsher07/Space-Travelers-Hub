import React from 'react';
import { useDispatch } from 'react-redux';
import { bookRockets, cancelRocketBooking } from '../redux/rockets';
/* eslint-disable react/prop-types */
const Rocket = (props) => {
  const { rocket } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    if (rocket.reserved && rocket.reserved === true) {
      dispatch(cancelRocketBooking(rocket.id));
    } else {
      dispatch(bookRockets(rocket.id));
    }
  };

  return (
    <div className="rocket d-flex ">
      <img className="rocket-image" src={rocket.flickr_images} alt={`${rocket.rocket_name}`} />
      <div className="rocket-details d-col-flex">
        <h2>{rocket.rocket_name}</h2>
        {rocket.reserved && rocket.reserved === true
          ? (
            <div className="cancel-reservation d-col-flex">
              <p>
                <span>Reserved</span>
                {rocket.description}
              </p>
              <button type="button" onClick={handleClick}>Cancel Reservation</button>
            </div>
          )
          : (
            <div className="reserve-rocket d-col-flex">
              <p>{rocket.description}</p>
              <button type="button" onClick={handleClick}>Reserve Rocket</button>
            </div>
          )}
      </div>
    </div>
  );
};

export default Rocket;
