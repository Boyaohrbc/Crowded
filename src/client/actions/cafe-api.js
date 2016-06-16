import axios from 'axios';

const API_KEY = 'AIzaSyDkRyt36Yj2FYAiJklN810C_UWN8GF6gD0';
const ROOT_URL = `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${API_KEY}&type=cafe`

export const FETCH_CAFELIST = 'FETCH_CAFELIST';

// const lat = 37.764269;
// const lng = -122.427380;

//define this function properly:
export function fetchCafeListByHood(hood) {
  const url = `${ROOT_URL}&query=san%20francisco%20${hood}`;
  const request = axios.get(url);
  console.log(request);

  return {
    type: FETCH_CAFELIST,
    payload: request
  }
};

