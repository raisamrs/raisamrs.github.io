// formHandlers.tsx
import React, { useState, useEffect } from 'react';
import { isNameValid, isLastNameValid, isEmailValid } from './formValidations';

export function useForm() {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newName = event.target.value;
    setName(newName);
    if (!isNameValid(newName)) {
      setNameError('Ops! Parece que você digitou o nome errado!');
    } else {
      setNameError('');
    }
  }

  function handleLastNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newLastName = event.target.value;
    setLastName(newLastName);
    if (!isLastNameValid(newLastName)) {
      setLastNameError('Ops! Parece que você digitou o sobrenome errado!');
    } else {
      setLastNameError('');
    }
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newEmail = event.target.value;
    setEmail(newEmail);
    if (!isEmailValid(newEmail)) {
      setEmailError('Ops! E-mail inválido! :(');
    } else {
      setEmailError('');
    }
    setEmail(event.target.value);
  }

  function handleSubjectChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSubject(event.target.value);
  }

  function handleMessageChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setMessage(event.target.value);
  }

  function isInputFilled(input: string) {
    return input.trim() !== '';
  }

  useEffect(() => {
    if (isNameValid(name) && isLastNameValid(lastName) && isEmailValid(email)
      && isInputFilled(subject) && isInputFilled(message)) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [name, lastName, email, subject, message]);

  return {
    name,
    nameError,
    lastName,
    lastNameError,
    email,
    emailError,
    subject,
    message,
    btnDisabled,
    handleNameChange,
    handleLastNameChange,
    handleEmailChange,
    handleSubjectChange,
    handleMessageChange,
  };
}
