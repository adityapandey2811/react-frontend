const initialState = {
  feedbacks: [],
  error: null,
};

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FEEDBACK_SUCCESS':
      return { ...state, error: null };
    case 'ADD_FEEDBACK_FAILURE':
      return { ...state, error: action.payload };
    case 'GET_FEEDBACKS_SUCCESS':
      return { ...state, feedbacks: action.payload, error: null };
    case 'GET_FEEDBACKS_FAILURE':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default feedbackReducer;




// const initialState = {
//     feedbacks: [],
//   };
  
//   const feedbackReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'ADD_FEEDBACK':
//         return {
//           ...state,
//           feedbacks: [...state.feedbacks, action.payload],
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default feedbackReducer;