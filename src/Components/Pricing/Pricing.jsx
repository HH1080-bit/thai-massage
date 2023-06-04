import React, { useState } from "react";
import styles from "./Pricing.module.css";
import axios from "axios";

const Pricing = () => {
  const plans = [
    {
      id: 1,
      planName: "60 Min",
      price: "85",
    },
    {
      id: 2,
      planName: "90 Min",
      price: "120",
    },
    {
      id: 3,
      planName: "Couples Plan (60 Min)",
      price: "200",
    },
    {
      id: 4,
      planName: "Parental (45 Min)",
      price: "90",
    },
  ];
  const comments = [
    {
      id: 1,
      name: "Sara M.",
      comment:
        "Incredibly experience. I highly recommend it. Great customer care",
    },
    {
      id: 2,
      name: "Amy G",
      comment:
        "Great massage. Felt extremely comfortable and relaxed. Would definitely make it a routine",
    },
  ];
  const [clientComment, setClientComment] = useState();
  const [isClienCommentInValid, setIsClientCommentInValid] = useState(true);
  const [isCommentSubmitted, setIsCommentSubmitted] = useState(false);
  const [isCommentSend, setIsCommentSent] = useState(false);

  const handleComments = (e) => {
    setIsCommentSent(false);
    setIsCommentSubmitted(true);
    const comment = e.target.value;
    setClientComment(comment);
    if (comment.trim().length < 20) {
      setIsClientCommentInValid(false);
    } else {
      setIsClientCommentInValid(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isClienCommentInValid && isCommentSubmitted) {
      try {
        await axios.post("https://harmonythaiyoga.ca/send-comment", {
          clientComment,
        });
        console.log("Comment sent successfully!");
        setIsCommentSent(true);
      } catch (error) {
        console.error("Comment Error:", error);
      }
      setClientComment("");
    }
  };

  return (
    <div className={styles.pricing}>
      <div className="container">
        <h2 className="text-center">Pricing List</h2>
        <span className="d-inline-block text-center">HST Not Included</span>
        <div className="row gap-3 justify-content-center my-5">
          {plans.map((plan) => {
            return (
              <div
                className={`${plan.id} col-lg-6 ${styles.card} text-center rounded`}
              >
                <h3>{plan.planName}</h3>
                <span>${plan.price}</span>
              </div>
            );
          })}
        </div>
        <div className={`${styles.notes} rounded my-3`}>
          <h3 className="text-center">Important Notes</h3>
          <ul>
            <li>Package : Purchase 3 massages and receive 8% off</li>
            <li>In your home: Add $10 per visit</li>
            <li>Gift Certificates available</li>
          </ul>
          <p className="mx-3">
            Most extended health insurance will not cover Thai Yoga Massage
            (please check with your insurance provider), however, referral
            through your physio therapist could be eligible for coverage
          </p>
        </div>
        <div className={`${styles.comments} mb-4`}>
          <h2>Comments</h2>
          <span className="mb-4">
            Leave a Comment, Share Your Experience With us!
          </span>
          <form onSubmit={handleSubmit}>
            <textarea
              className="form-control mb-3"
              value={clientComment}
              onChange={handleComments}
              placeholder="Leave Your Comment Here ..."
            ></textarea>
            {!isClienCommentInValid && (
              <div className="mb-2 text-danger">
                Your Comment Must be at Least 20 characters
              </div>
            )}
            {isCommentSend && (
              <div className="mb-2 text-success">
                Your Comment Sent Successfully
              </div>
            )}

            <input
              type="submit"
              value="Send Comment"
              className="btn btn-success px-5 py-2 d-block mx-auto"
            />
          </form>
        </div>
        <div className={`${styles.testimonials}  mb-4`}>
          <h2 className="mb-3">See Our Clients Comments!</h2>
          <div className="row">
            {comments.map((oneComment) => {
              return (
                <div
                  className={`${styles.comment} col-lg-6`}
                  key={oneComment.id}
                >
                  <p className="fst-italic text-light fw-bold ">
                    "{oneComment.comment}"
                  </p>
                  <span className={styles.comment_name}>{oneComment.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
