import axios from 'axios';

const GET_MISSIONS = 'space-travelers-hub/missions/GET_MISSIONS';
const JOIN_MISSION = 'space-travelers-hub/missions/JOIN_MISSION';
const LEAVE_MISSION = 'space-travelers-hub/missions/LEAVE_MISSION';

const URL = 'https://api.spacexdata.com/v3/missions';

export const getMissions = (success) => {
  axios.get(URL)
    .then((response) => {
      success(response);
    });
};
const initialState = [];

export const missionsReducer = (state = initialState, action) => {
  let missions;
  switch (action.type) {
    case GET_MISSIONS:
      missions = action.payload.map((mission) => ({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
      }));
      return missions;
    case JOIN_MISSION:
      missions = state.map((mission) => (
        mission.id !== action.payload
          ? mission
          : { ...mission, reserved: true }
      ));
      return missions;
    case LEAVE_MISSION:
      missions = state.map((mission) => (
        mission.id !== action.payload
          ? mission
          : { ...mission, reserved: false }
      ));
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

export const joinMission = (id) => (dispatch) => {
  dispatch({
    type: JOIN_MISSION,
    payload: id,
  });
};

export const leaveMission = (id) => (dispatch) => {
  dispatch({
    type: LEAVE_MISSION,
    payload: id,
  });
};
