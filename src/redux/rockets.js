import axios from 'axios';

const GET_ROCKETS = 'GET_ROCKETS';
const UPDATE_ROCKET = 'UPDATE_ROCKET';

const getRocketsFromApi = (success) => {
  axios.get('https://api.spacexdata.com/v3/rockets')
    .then((res) => {
      success(res);
    });
};

const initialState = [];

export const rocketsReducer = (state = initialState, action) => {
  let rockets;
  const rocketId = action.payload;
  switch (action.type) {
    case GET_ROCKETS:
      rockets = action.payload.map((rocket) => ({
        id: rocket.id,
        rocket_name: rocket.rocket_name,
        description: rocket.description,
        flickr_images: rocket.flickr_images[0],
      }));
      return rockets;
    case UPDATE_ROCKET:
      rockets = state.map((rocket) => (
        rocket.id !== rocketId
          ? rocket
          : { ...rocket, reserved: true }
      ));
      return rockets;
    default: return state;
  }
};

export const getRockets = () => (dispatch) => {
  getRocketsFromApi((res) => {
    dispatch({
      type: GET_ROCKETS,
      payload: res.data,
    });
  });
};

export const updateRockets = (id) => (dispatch) => {
  dispatch({
    type: UPDATE_ROCKET,
    payload: id,
  });
};
