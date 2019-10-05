import React from 'react';

import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

// import { Container } from './styles';

export default function SingIn() {
  return (
    <>
      <img src={logo} alt="gobarber" />

      <form>
        <input type="email" placeholder="Type your E-mail" />
        <input type="password" placeholder="Type your Password" />

        <button type="submit">Submit</button>
        <Link to="/register">Create an account</Link>
      </form>
    </>
  );
}
