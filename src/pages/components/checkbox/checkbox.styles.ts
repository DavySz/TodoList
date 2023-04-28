import styled, { css } from "styled-components";

interface IContainer {
  isSelected: boolean;
}

export const Container = styled.div<IContainer>`
  height: 21px;
  width: 21px;

  background-color: ${({ isSelected }) =>
    isSelected ? "#1DB863" : "transparent"};

  ${({ isSelected }) =>
    !isSelected &&
    css`
      border: 1px solid #b2b2b2;
    `}

  border-radius: 5px;
`;
