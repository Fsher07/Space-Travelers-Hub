import axios from 'axios';

const GET_ROCKETS = 'GET_ROCKETS';

const getRocketsFromApi = (success) => {
  axios.get('https://api.spacexdata.com/v3/rockets')
    .then((res) => {
      success(res);
    });
};

const initialState = [];

export const rocketsReducer = (state = initialState, action) => {
  let rockets;
  switch (action.type) {
    case GET_ROCKETS:
      rockets = action.payload.map((rocket) => ({
        id: rocket.id,
        rocket_name: rocket.rocket_name,
        description: rocket.description,
        flickr_images: rocket.flickr_images[0],
      }));
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
