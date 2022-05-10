import axios from "axios";

const GET_ROCKETS = 'GET_ROCKETS';

const getRocketsFromApi = (success) => {
  axios.get('https://api.spacexdata.com/v3/rockets')
  .then((res) => {
    success(res);
  })
}

export const rocketsReducer = (state = [], action) => {
  switch(action.type) {
    case GET_ROCKETS: 
      return [
        ...state,
        action.payload,
      ];
    default: return state;
  }
}

export const getRockets = () => (dispatch) => {
  getRocketsFromApi((res) => {
    dispatch({
      type: GET_ROCKETS,
      payload: res.data,
    });
  });
};