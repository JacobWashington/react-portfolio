import React from 'react';
import "./ContactItem.css"

const ContactItem = (props) => {
    return (
        <div className="contact-item">
            <a href={props.site} target="_blank">
                <img src={props.logo} width="35px"/>
            </a>
        </div>
    );
}

export default ContactItem;
