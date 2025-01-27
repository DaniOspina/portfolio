import React, { useState } from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin: 0rem;
  background-color: #1f1f1f;
  color: #e2e8f0;
`;

const ContactHeading = styled.h1`
  font-size: 6rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #f1f5f9;
`;

const ContactSubText = styled.p`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #cbd5e1;
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 90%;
`;

const InputField = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 3px solid #94a3b8;
  border-radius: 4px;
  background-color: #1f1f1f;
  color: #e2e8f0;

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 3px solid #94a3b8;
  border-radius: 4px;
  background-color: #1f1f1f;
  color: #e2e8f0;
  resize: none;

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

const SubmitButton = styled.button`
  align-self: flex-start;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #3b82f6;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2563eb;
  }
`;

const ErrorText = styled.span`
  color: #f87171;
  font-size: 0.875rem;
`;

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && message !== '') {
      fetch('https://formspree.io/f/mdkaajaq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })
        .then((response) => {
          if (response.ok) {
            alert('Message sent successfully!');
            setName('');
            setEmail('');
            setMessage('');
          } else {
            alert('Failed to send the message. Please try again.');
          }
        })
        .catch(() => alert('An error occurred. Please try again.'));
    }
  };

  return (
    <ContactWrapper id="contact">
      <ContactHeading>Contact</ContactHeading>
      <ContactSubText>
        Got a project waiting to be realized? Let's collaborate and make it happen!
      </ContactSubText>
      <ContactForm onSubmit={sendEmail} noValidate>
          <InputGroup>
            <label htmlFor="name">Name</label>
            <InputField
              id="name"
              type="text"
              placeholder="What's your name?"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <ErrorText>Please enter your name</ErrorText>}
          </InputGroup>
          <InputGroup>
            <label htmlFor="email">Email</label>
            <InputField
              id="email"
              type="email"
              placeholder="How can I reach you?"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <ErrorText>Please enter your email</ErrorText>}
          </InputGroup>
        <InputGroup>
          <label htmlFor="message">Message</label>
          <TextArea
            id="message"
            rows="6"
            placeholder="Send me any inquiries or questions"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {messageError && <ErrorText>Please enter the message</ErrorText>}
        </InputGroup>
        <SubmitButton type="submit">Send</SubmitButton>
      </ContactForm>
    </ContactWrapper>
  );
}

export default Contact;
