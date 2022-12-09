import styled from "styled-components";

export const Container = styled.div`
  font-weight: bold;
  width: 80px;
  height: 80px;
  background-color: var(--SECONDARY);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    color: var(--BLUE);
    width: fit-content;
    height: fit-content;
    transform: rotate(-15deg);
    font-size: 3.75rem;
  }

  @media (max-width: 1900px) {
    width: 70px;
    height: 70px;
    div {
      font-size: 3.4rem;
    }
  }

  @media (max-width: 1600px) {
    width: 62px;
    height: 62px;
    div {
      font-size: 3.2rem;
    }
  }

  @media (max-width: 1450px) {
    width: 58px;
    height: 58px;
    div {
      font-size: 3.1rem;
    }
  }
`;
