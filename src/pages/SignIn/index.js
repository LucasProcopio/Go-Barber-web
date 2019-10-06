import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SingIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
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

    setErrors('');
    let isValid = true;

    await authSchema.validate({ email, password }).catch(err => {
      setErrors(err.message);
      isValid = false;
    });

    if (!isValid) return;

    dispatch(signInRequest(email, password));
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
        <button type="submit">{loading ? 'Loading...' : 'Submit'}</button>
        <Link to="/register">Create an account</Link>
      </form>
    </>
  );
}
