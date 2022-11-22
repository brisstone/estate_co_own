import React from "react";
import "./NewsLetter.scss";

const NewsLetter = () => {
  return (
    <div className="newsletter_wrapper">
      <div className="newletter_warapper_header">
        Sign up for our weekly newsletter
      </div>
      <div className="newsletter_box_div">
        <div className="newsletter_text">
          <input
            placeholder="Enter your email"
            className="newsletter_text_input"
          />
        </div>
        <div className="newsletter_box">Subcribe</div>
      </div>
    </div>
  );
};

export default NewsLetter;
