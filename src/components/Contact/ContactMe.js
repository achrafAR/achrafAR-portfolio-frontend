import React, { useRef } from "react";
import "./contactMe.css";
import contactMEPhoto from "../../Images/aboutMe-photo.avif";
import emailjs from "emailjs-com"


function ContactMe() {

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ruterli",
        "template_vlwegj2",
        formRef.current,
        "SvfqYlAZDBTRKlpnH"
      )
      .then(
        (result) => {
          console.log(result.text);
          formRef.current.reset();
        },
        (error) => {
          console.error("Failed to send email:", error.text);
        }
      );
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-form-image">
        <div className="contact-text-form">
          <div className="conatct-text">
            <h1>Hire ME.</h1>
            <p>
    I am available for freelance work. Connect with me via phone:
    <span>+971547828163 </span>
    or email:
    <span>achraf.alrachini@gmail.com</span>
</p>
          </div>
          <form ref={formRef} onSubmit={sendEmail} className="conatct-form">
            <input type="text" id="name" name="name" placeholder="Your Name" required />
            <input type="email" id="email" name="email" placeholder="Your Email" required />
            <input type="text" id="subject" name="subject" placeholder="Write a Subject" required />
            <input id="message" name="message" placeholder="Your Message" required />
            <div className="contact-button">
              <button type="submit" onClick={sendEmail}>SUBMIT</button>
            </div>
          </form>
        </div>
        <div className="contact-image">
          <img src={contactMEPhoto} alt="contactMe" />
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
