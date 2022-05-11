import axios from 'axios';

const GET_MISSIONS = 'space-travelers-hub/missions/GET_MISSIONS';

const URL = 'https://api.spacexdata.com/v3/missions';

export const getMissions = (success) => {
  axios.get(URL)
    .then((response) => {
      success(response);
    });
};

export const missionsReducer = (state = [], action) => {
  let missions;
  switch (action.type) {
    case GET_MISSIONS:
      missions = action.payload.map((mission) => ({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
      }));
      return missions;
    default:
      return state;
  }
};

export const getMissionsAction = () => (dispatch) => {
  getMissions((results) => {
    dispatch({
      type: GET_MISSIONS,
      payload: results.data,
    });
  });
};
