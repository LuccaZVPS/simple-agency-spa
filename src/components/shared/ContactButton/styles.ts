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

  @media (max-width: 1900px) {
    width: 165px;
    height: 57px;
  }
  font-size: 0.8rem;
  gap: 12px;

  svg {
    font-size: 1.4rem;
  }

  @media (max-width: 1600px) {
    width: 155px;
    height: 52px;
    font-size: 0.77rem;
    gap: 12px;
  }
  @media (max-width: 1450px) {
    width: 140px;
    height: 48px;
    font-size: 0.77rem;
    gap: 12px;
  }

  @media (max-width: 1200px) {
    width: 125px;
    height: 44px;
    font-size: 0.74rem;
    gap: 12px;
  }
`;
