import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

export default function SingIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  /**
   * Error schema validation
   */
  const authSchema = Yup.object().shape({
    email: Yup.string()
      .email('💩 Enter a valid E-mail')
      .required('💩 E-mail is required'),
    password: Yup.string().required('💩 Password is required'),
  });

  /**
   * Handle submit button
   */
  const handleSubmit = async e => {
    e.preventDefault();
    await authSchema.validate({ email, password }).catch(err => {
      setErrors(err.message);
    });
  };

  return (
    <>
      <img src={logo} alt="gobarber" />

      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="email"
          placeholder="Type your E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Type your Password"
          onChange={e => setPassword(e.target.value)}
        />
        {errors.length > 0 && <span className="error">{errors}</span>}
        <button type="submit">Submit</button>
        <Link to="/register">Create an account</Link>
      </form>
    </>
  );
}
