import React, { useState } from 'react';
import '../src/App.css'

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError('');
  };

  const handleSubmit = () => {
    let isValid = true;

    if (!email.includes('@') || !email.includes('.')) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    }

    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
      isValid = false;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
      isValid = false;
    }

    if (isValid) {
      alert('Form submitted successfully!');
    } else {
      alert('Can\'t submit the form.');
    }
  };

  return (
    <div className="form-container">
      <div className='container'>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        style={{ borderColor: emailError ? 'red' : 'green' }}
      />
      {emailError && <div className="error">{emailError}</div>}
      </div>
      <div className='container'>
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      {passwordError && <div className="error">{passwordError}</div>}
      </div>
      <div className='container'>
      <label>Confirm Password:</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      {confirmPasswordError && <div className="error">{confirmPasswordError}</div>}
      
      </div>
      <button onClick={handleSubmit}>Sign up</button>

    </div>
  );
};

export default Form;
