import axios from 'axios';

export const addFeedback = (feedback) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:8090/feedback/addFeedback', feedback);
    dispatch({ type: 'ADD_FEEDBACK_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'ADD_FEEDBACK_FAILURE', payload: error.message });
  }
};

export const getFeedbacks = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:8090/feedback/showfeedbacks');
    dispatch({ type: 'GET_FEEDBACKS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'GET_FEEDBACKS_FAILURE', payload: error.message });
  }
};


// export const addFeedback = (feedback) => {
//     return {
//       type: 'ADD_FEEDBACK',
//       payload: feedback,
//     };
//   };
