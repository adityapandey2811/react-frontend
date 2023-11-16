import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFeedbacks } from '../../redux/actions/feedbackActions';

const FeedbackList = () => {
  const dispatch = useDispatch();
  const feedbacks = useSelector((state) => state.feedbacks ?? []);

  useEffect(() => {
    dispatch(getFeedbacks());
  }, [dispatch]);

  return (
    <div>
      <h2>Feedback List</h2>
      <ul>
        {feedbacks.map((feedback) => (
          <li key={feedback.feedbackId}>{feedback.feedbackDescription}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;



// import React from 'react';
// import { useSelector } from 'react-redux';

// const FeedbackList = () => {
//   const feedbacks = useSelector((state) => state.feedbacks);

//   return (
//     <div>
//       <h2>Feedback List</h2>
//       <ul>
//         {feedbacks.map((feedback, index) => (
//           <li key={index}>{feedback.feedbackDescription}</li>
//           // Add other feedback properties as needed
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FeedbackList;
