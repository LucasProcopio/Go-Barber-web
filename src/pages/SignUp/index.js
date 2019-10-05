import React from 'react';

import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

// import { Container } from './styles';

export default function SingUp() {
  return (
    <>
      <img src={logo} alt="gobarber" />

      <form>
        <input placeholder="Type your Full Name" />
        <input type="email" placeholder="Type your E-mail" />
        <input type="password" placeholder="Type your Password" />

        <button type="submit">Submit</button>
        <Link to="/">I already have an account</Link>
      </form>
    </>
  );
}
