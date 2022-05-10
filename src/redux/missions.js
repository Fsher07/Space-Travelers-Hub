import axios from "axios";

const GET_MISSIONS = "space-travelers-hub/missions/GET_MISSIONS";

const URL = "https://api.spacexdata.com/v3/missions";

export const getMissions = (success) => {
  axios.get(URL)
  .then(response => {
    success(response);
  }
  )
};

export const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export const getMissionsAction = () => (dispatch) => {
  getMissions((results) => {
    dispatch({
      type: GET_BOOKS,
      payload: results.data,
    });
  });
};