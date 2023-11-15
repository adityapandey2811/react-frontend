import axios from 'axios';

export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILURE = 'FORGOT_PASSWORD_FAILURE';

export const forgotPasswordSuccess = () => ({
  type: FORGOT_PASSWORD_SUCCESS,
});

export const forgotPasswordFailure = (error) => ({
  type: FORGOT_PASSWORD_FAILURE,
  payload: error,
});

export const forgotPassword = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('forget password url', userData);
    dispatch(forgotPasswordSuccess());
  } catch (error) {
    dispatch(forgotPasswordFailure(error.message || 'Forgot password failed.'));
  }
};
