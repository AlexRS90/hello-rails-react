import axios from "axios";

const GET_MESSAGE_REQUEST = 'GET_MESSAGE_REQUEST';
const GET_MESSAGE_SUCCESS = 'GET_MESSAGE_SUCCESS';
const GET_MESSAGE_FAILED = 'GET_MESSAGE_FAILED';

export const getMessage = () => {
  return (dispatch) => {
    axios.get('http://127.0.0.1:3000/api/v1/regards')
      .then(response => {
        // const position = response.data[Math.floor(Math.random() * (4 - 0) + 1)]
        dispatch({ type: GET_MESSAGE_SUCCESS, payload: response.data })
      })
      .catch(err => dispatch({ type: GET_MESSAGE_FAILED, payload: err }))
  }
}

const initialState = {
  loading: false, 
  message: [], 
  error: null
}

const regardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGE_REQUEST:
      return { loading: true, message: [], error: null}
    case GET_MESSAGE_SUCCESS:
      return { loading: false, message: action.payload }
    case GET_MESSAGE_FAILED:
      return { loading: false, message: [], error: action.payload }
    default:
      return state;
  }
}

export default regardsReducer;
