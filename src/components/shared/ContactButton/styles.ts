import styled from "styled-components";

export const Container = styled.button`
  width: 180px;
  height: 64px;
  background-color: var(--BLUE);
  border-radius: 4px;
  outline: none;
  border: none;
  color: var(--BACKGROUND);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 0.9rem;
  font-weight: bold;
  svg {
    font-size: 1.6rem;
  }
`;
