import React from 'react';
import './ContactUsCard.scss';


const ContactUsCard = (props) => {

    const {image} = props
    return (
        <div>
            <div><img src={image} alt={image} /></div>
            
        </div>
    );
}

export default ContactUsCard;
