import React from 'react';
import './AboutUsCard.scss'

const AboutUsCard = (props) => {
    const { content, author, image, height, width } = props;
    return (
      <div
        className="card_wrapper"
        style={{
          height: height ? height : "248px",
          width: width ? width : "352px",
          // width: "352x",
        }}
      >
        <div className="card_content">{content}</div>
        <div className="card_author">
          <div className="card_image ">
            <img className="image" src={image} alt={image} />
          </div>
          <div className="card_author_name">{author}</div>
        </div>
      </div>
    );
}

export default AboutUsCard;
