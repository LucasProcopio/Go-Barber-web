import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      padding: 5px 15px;
      color: #fff;
      margin: 0 0 10px;
      height: 44px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.8);
      }
    }

    .error {
      color: #fff;
      margin: 12px 0;
      font-weight: bold;
    }

    button {
      background: #3b9aff;
      border-radius: 4px;
      padding: 0 15px;
      height: 44px;
      color: #fff;
      border: 0;
      transition: background 0.2s linear;
      &:hover {
        background: ${darken(0.2, '#3b9aff')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      transition: opacity 0.2s linear;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }
  }

  > button {
    width: 100%;
    background: #f64c75;
    margin: 10px 0 0;
    border-radius: 4px;
    padding: 0 15px;
    height: 44px;
    color: #fff;
    border: 0;
    transition: background 0.2s linear;
    &:hover {
      background: ${darken(0.2, '#f64c75')};
    }
  }
`;
