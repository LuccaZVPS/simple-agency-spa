import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 500px;
  left: calc(50% - 250px);
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    list-style: none;
    gap: 32px;
  }
  ul li a {
    color: var(--BLACK);
    text-decoration: none;
    font-weight: 600;
    font-size: 1.3rem;
  }

  @media (max-width: 1900px) {
    ul li a {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 1600px) {
    ul li a {
      font-size: 1.15rem;
    }
  }

  @media (max-width: 1450px) {
    ul li a {
      font-size: 1.1rem;
    }
  }
  @media (max-width: 1200px) {
    ul li a {
      font-size: 1rem;
    }
  }
`;
