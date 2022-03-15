import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_npigc2i",
        "template_9w83lwk",
        form.current,
        "user_PodJhmSOVpwNTJvC5n4Ex"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="to-contact" className="contact-div">
      <h1>Let Connect!</h1>
      <div className="contact-div-inner">
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <label className="contact-label-name">
            Name
            <input
              className="contact-input-name"
              name="from_name"
              placeholder="Name"
            />
          </label>
          <label className="contact-label-email">
            Email
            <input
              className="contact-input-email"
              name="from_email"
              placeholder="Email"
            />
          </label>
          <label className="contact-label-message">
            Message
            <textarea className="contact-textarea-message" name="message" />
          </label>
          <input className="contact-submit" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
