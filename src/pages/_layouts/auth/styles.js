import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

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
  }
`;
