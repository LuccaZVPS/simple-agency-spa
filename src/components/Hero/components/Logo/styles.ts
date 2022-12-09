import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  .logo-name {
    font-weight: bold;
    font-size: 3rem;
    color: var(--BLACK);
  }

  @media (max-width: 1900px) {
    .logo-name {
      font-size: 2.6rem;
    }
  }

  @media (max-width: 1600px) {
    .logo-name {
      font-size: 2.4rem;
    }
  }

  @media (max-width: 1450px) {
    .logo-name {
      font-size: 2.2rem;
    }
  }

  @media (max-width: 1200px) {
    .logo-name {
      font-size: 2rem;
    }
  }
`;
