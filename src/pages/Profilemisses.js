import { PropTypes } from 'prop-types';

const ProfileMissions = (props) => {
  const { name } = props;

  return (
    <div>
      <span>{name}</span>
    </div>
  );
};

ProfileMissions.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProfileMissions;
