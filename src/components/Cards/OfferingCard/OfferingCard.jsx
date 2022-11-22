import React from 'react';
import "./OfferingCard.scss";

const OfferingCard = (props) => {

    const {title, image, text, color} = props
    return (
      <div
        className="offering_card_body"
        style={{ background: color ? color : "#ffffff", height: "" }}
      >
        <div className="offering_image">
          <img className="image" src={image} alt={image} />
        </div>
        <div className="offering_title">{title}</div>
        <div className="offering_text">{text}</div>
      </div>
    );
}

export default OfferingCard;
