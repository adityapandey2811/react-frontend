
import axios from 'axios';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const registerSuccess = (user) => ({
  type: REGISTER_SUCCESS,
  payload: user,
});

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});

export const register = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('backend registration url', userData);
    const registeredUser = response.data;

    dispatch(registerSuccess(registeredUser));
  } catch (error) {
    dispatch(registerFailure(error.message || 'Registration failed.'));
  }
};
