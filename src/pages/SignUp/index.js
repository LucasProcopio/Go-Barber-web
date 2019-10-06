import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';
import { signUpRequest } from '~/store/modules/auth/actions';

export default function SingUp() {
  const [name, setName] = useState('');
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
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

  const handleSubmit = async e => {
    e.preventDefault();

    setErrors('');
    let isValid = true;

    await loginSchema.validate({ name, email, password }).catch(err => {
      setErrors(err.message);
      isValid = false;
    });

    if (!isValid) return;

    dispatch(signUpRequest(name, email, password));
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
        <button type="submit">{loading ? 'Loading...' : 'Submit'}</button>
        <Link to="/">I already have an account</Link>
      </form>
    </>
  );
}
