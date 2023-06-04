import React, { useState } from "react";
import styles from "./Contact.module.css";
import { FaRegAddressCard } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [isNameInvalid, setIsNameInvalid] = useState(false);

  const [mail, setMail] = useState("");
  const [isMailInValid, setIsMailInValid] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleName = (e) => {
    setIsSubmitted(false);
    const newName = e.target.value;

    setName(newName);
    if (name.trim().length < 4) {
      setIsNameInvalid(true);
    } else {
      setIsNameInvalid(false);
    }
  };
  const handleMail = (e) => {
    setIsSubmitted(false);
    const newMail = e.target.value;
    setMail(newMail);
    if (!mail.includes("@")) {
      setIsMailInValid(true);
    } else {
      setIsMailInValid(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    e.preventDefault();

    const data = {
      to: 'blackablue12@gmail.com',
      from: 'j7089366@gmail.com',
      subject: 'Test Email',
      body: 'This is a test email sent using SmtpJS.com',
      SecureToken: 'dfe00927-9fb1-490e-9c1d-79d07ad5f09e', // Replace with your SmtpJS.com secure token
    };
    axios.post('https://smtpjs.com/v3/smtp.js', data)
    .then((response) => {
      console.log('Email sent successfully:', response);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
  
    setName("");
    setMail("");
    setName("");
    setMail("");
  };
  const inputErrorStyling = { border: "2px solid #dc3545" };
  const inputValidStyling = { border: "2px solid #198754" };

  return (
    <div className={styles.contact}>
      <div className="container">
        <h2 className="text-center text-light mb-5">Contact Us</h2>
        <div className="text-center">
          <span className="text-center text-light fw-bold d-block mb-3">
            Leave Your Name And E-mail newsletter to receive promotions and
            updates.
          </span>
          <form className="mb-5" onSubmit={handleSubmit}>
            <label className="text-light fw-bold">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="form-control w-50 mx-auto my-3"
              value={name}
              onChange={handleName}
              style={isNameInvalid ? inputErrorStyling : inputValidStyling}
              placeholder="Your Name"
              autoComplete="off"
            />
            {isNameInvalid && (
              <div className="text-danger mb-2">
                Name Must be At least Four Characters
              </div>
            )}
            <label className="text-light fw-bold">Your E-mail</label>
            <input
              type="email"
              className="form-control w-50 mx-auto my-3"
              name="email"
              required
              value={mail}
              onChange={handleMail}
              style={isMailInValid ? inputErrorStyling : inputValidStyling}
              placeholder="Your E-mail"
              autoComplete="off"
            />
            {isMailInValid && (
              <div className="text-danger mb-2">Mail Must Contain @ </div>
            )}
            {isSubmitted && (
              <div className="text-success mb-2">
                Your Mail is Submitted, We Will Send you New Pormotions and
                Updates{" "}
              </div>
            )}
            {!isSubmitted && isError && (
              <div className="text-danger mb-2">
                Oops!, Looks like There is an error sending your Mail, Please
                Try Again Later
              </div>
            )}

            <input
              type="submit"
              value="Send"
              className="btn btn-success px-5 py-2 "
            />
          </form>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.692955103352!2d-81.24907742392112!3d42.98474117114176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef21caa628393%3A0x5cac6571f852687!2s246%20Dundas%20St%2C%20London%2C%20ON%20N6A%201H3%2C%20Canada!5e0!3m2!1sen!2seg!4v1685660762101!5m2!1sen!2seg"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="col-lg-6 text-light">
            <ul>
              <li>
                <FaRegAddressCard className="me-2" size={16} /> Adress:- 246
                Dundas St., London ON N6A 1H3{" "}
              </li>
              <li>
                <BsTelephone className="me-2" size={16} /> Phone:- 519-494-8424
              </li>
              <li>
                <FiMail className="me-2" size={16} /> Email:-
                info@harmonythaiyoga.ca
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
