import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const InputStyled = styled.input`
  border: none;
  padding: 16px 24px;

  width: 450px;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: #fff;
  border: none;

  padding: 11px;
`;
