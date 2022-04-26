import React, { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    setErrorMessage("");
    const { name, value } = e.target;
    const inputType = name;
    const inputValue = value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "subject") {
      setSubject(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    console.log(email, name, subject, message);

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name || !subject || !message) {
      setErrorMessage("Email, Name, Subject or Message is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setEmail("");
    setName("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="contact d-flex justify-content-center align-items-center flex-column">
      <div className="contact-card d-flex justify-content-center align-items-center flex-column">
        <div className="mb-3 input-area">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Full Name
          </label>
          <input
            value={name}
            onChange={handleInputChange}
            name="name"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="John Doe"
          />
        </div>
        <div className="mb-3 input-area">
          <label htmlFor="exampleFormControlInput2" className="form-label">
            Email address
          </label>
          <input
            value={email}
            onChange={handleInputChange}
            name="email"
            type="email"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3 input-area">
          <label htmlFor="exampleFormControlInput3" className="form-label">
            Subject
          </label>
          <input
            value={subject}
            onChange={handleInputChange}
            name="subject"
            type="text"
            className="form-control"
            id="exampleFormControlInput3"
            placeholder="Email Subject"
          />
        </div>
        <div className="mb-3 input-area">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Message
          </label>
          <textarea
            value={message}
            onChange={handleInputChange}
            name="message"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <button
            onClick={handleFormSubmit}
            type="button"
            className="btn btn-warning contact-button"
          >
            Submit
          </button>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
