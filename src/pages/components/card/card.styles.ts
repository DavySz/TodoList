import styled, { css } from "styled-components";

interface ILabel {
  isSelected: boolean;
}

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  background: rgba(196, 196, 196, 0.2);

  width: 500px;

  border-radius: 5px;

  padding: 14px 24px;
`;

export const Label = styled.span<ILabel>`
  margin-left: 12px;
  font-size: "Inter", sans-serif;

  font-weight: 500;

  font-size: 14px;

  color: ${({ isSelected }) => (isSelected ? "#1DB863" : "#666666")};

  ${({ isSelected }) =>
    isSelected &&
    css`
      text-decoration: line-through;
    `}
`;

export const Wrapper = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;

  border: none;
  cursor: pointer;
`;

export const IconWrapper = styled.button`
  border: none;
  cursor: pointer;
`;
