import React from "react";
import "./ContactMe.css";
import ContactData from "./ContactData";
import ContactItem from "../../components/contactItem/ContactItem";
import Logo from "../../components/nav/logo/Logo";

const ContactMe = () => {
  let mappedContact = ContactData.map((contact, index) => {
    return <ContactItem site={contact.url} logo={contact.logo} key={index} />;
  });

  return (
    <div className="container contact">
      <Logo class="footer-logo" />
      <p className="footer-p">
        Learning, lifting, & leveling up one day at a time.
      </p>
      <div className="social-media">{mappedContact}</div>
      <div className="made-by">
        <p className="footer-p last">Handcrafted by me © jacobwashington</p>
      </div>
    </div>
  );
};

export default ContactMe;
