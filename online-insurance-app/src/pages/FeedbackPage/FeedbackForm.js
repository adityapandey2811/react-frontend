import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFeedback } from "../../redux/actions/feedbackActions";
import "./FeedbackForm.css";

const FeedbackForm = () => {
  const dispatch = useDispatch();
  const [feedback, setFeedback] = useState({
    orderId: "",
    feedbackDescription: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFeedback(feedback));
  };

  return (
    <div className="screen-5">
      <div className="header">Feedback Form</div>
      <div className="orderid">
        <label htmlFor="orderid">Order ID</label>
        <div className="sec-2">
          <ion-icon name="person-outline"></ion-icon>
          <input
            type="text"
            value={feedback.orderId}
            placeholder="Order ID"
            onChange={(e) =>
              setFeedback({ ...feedback, orderId: e.target.value })
            }
          />
        </div>
      </div>
      <div className="feedback-message">
        <label htmlFor="feedback-message">Feedback</label>
        <div className="sec-2">
          <ion-icon name="mail-outline"></ion-icon>
          <input
            type="text"
            value={feedback.feedbackDescription}
            placeholder="Feedback"
            onChange={(e) =>
              setFeedback({ ...feedback, feedbackDescription: e.target.value })
            }
          />
        </div>
      </div>
      <button className="submit-feedback" type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default FeedbackForm;
