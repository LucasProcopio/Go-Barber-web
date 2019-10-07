import React from 'react';
import { Input, Form } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="E-mail" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Current password"
        />
        <Input type="password" name="password" placeholder="New password" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
        />

        <button type="submit">Update profile</button>
      </Form>

      <button type="button">Log out</button>
    </Container>
  );
}
