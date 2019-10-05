import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';

export default function SingUp() {
  const [name, setName] = useState('');
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  /**
   * Error schema validation
   */
  const loginSchema = Yup.object({
    name: Yup.string().required('💩 Full name required'),
    email: Yup.string()
      .email('💩 Enter a valid E-mail')
      .required('💩 E-mail is required'),
    password: Yup.string('💩 Password must be at least 6 characters')
      .min(6)
      .required('💩 Password is required'),
  });

  const handleSubmit = e => {
    e.preventDefault();
    setErrors('');
    loginSchema.validate({ name, email, password }).catch(err => {
      setErrors(err.message);
    });
  };
  return (
    <>
      <img src={logo} alt="gobarber" />

      <form onSubmit={e => handleSubmit(e)}>
        <input
          value={name}
          placeholder="Type your Full Name"
          onChange={e => setName(e.target.value)}
        />
        <input
          value={email}
          type="email"
          placeholder="Type your E-mail"
          onChange={e => setMail(e.target.value)}
        />
        <input
          value={password}
          type="password"
          placeholder="Type your Password"
          onChange={e => setPassword(e.target.value)}
        />
        {errors.length > 0 && <span className="error">{errors}</span>}
        <button type="submit">Submit</button>
        <Link to="/">I already have an account</Link>
      </form>
    </>
  );
}
