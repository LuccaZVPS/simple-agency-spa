import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 30px;
  z-index: 100;
  h2 {
    width: 50%;
    font-size: 3.5rem;
  }
  span {
    color: var(--BLUE);
  }
  p {
    font-size: 1.1rem;
    font-weight: 400;
  }

  @media (max-width: 1900px) {
    h2 {
      font-size: 3.2rem;
    }
    p {
      font-size: 1.05rem;
    }
  }

  @media (max-width: 1450px) {
    h2 {
      font-size: 2.8rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 1200px) {
    h2 {
      width: 80%;

      font-size: 2.4rem;
    }
    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 850px) {
    h2 {
      width: 90%;

      font-size: 1.8rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;
