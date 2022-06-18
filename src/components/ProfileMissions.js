import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { leaveMission } from '../redux/missions';

const ProfileMissions = (props) => {
  const { name, id } = props;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(leaveMission(id));
  };
  return (
    <div className="profile-mission">
      <span>{name}</span>
      <button type="button" onClick={handleClick}>Leave Mission</button>
    </div>
  );
};

ProfileMissions.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProfileMissions;
