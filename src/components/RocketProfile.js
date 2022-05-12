import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { cancelRocketBooking } from '../redux/rockets';

const RocketProfile = (props) => {
  const { name, id } = props;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(cancelRocketBooking(id));
  };
  return (
    <div className="profile-mission">
      <span>{name}</span>
      <button type="button" onClick={handleClick}>Cancel Reservation</button>
    </div>
  );
};

RocketProfile.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default RocketProfile;
