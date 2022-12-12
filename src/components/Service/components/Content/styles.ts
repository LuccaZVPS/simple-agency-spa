import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 520px;
  position: relative;
  z-index: 100;
  h2 {
    font-size: 3.5rem;
  }
  p {
    font-size: 1.1rem;
  }

  img {
    position: absolute;
    width: 130px;
    bottom: -150px;
    right: 0;
    z-index: 0;
  }

  @media (max-width: 1900px) {
    width: 480px;

    h2 {
      font-size: 3.2rem;
    }
    p {
      font-size: 1.05rem;
    }
  }

  @media (max-width: 1450px) {
    width: 480px;

    h2 {
      font-size: 2.8rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media (max-width: 1200px) {
    width: 400px;

    h2 {
      font-size: 2.4rem;
    }
    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 850px) {
    width: 100%;
    display: flex;
    justify-content: center;

    h2,
    p {
      text-align: center;
    }

    h2 {
      font-size: 1.8rem;
    }
    p {
      font-size: 0.8rem;
    }
    img {
      display: none;
    }
  }
`;
