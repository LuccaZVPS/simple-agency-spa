import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
  gap: 30px;
  position: relative;
  z-index: 100;
  h1 {
    font-size: 5rem;
    text-align: center;
  }
  p {
    font-size: 1.2rem;
    text-align: center;
  }
  .scroll {
    position: absolute;
    bottom: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--GRAY);
    img {
      width: 30px;
    }
  }
  .star1 {
    position: absolute;
    top: -90px;
    right: -80px;
  }
  .star2 {
    position: absolute;
    bottom: -40px;
    left: -100px;
  }

  .title-content {
    position: relative;
  }

  @media (max-width: 1900px) {
    h1 {
      font-size: 4.7;
    }
  }

  @media (max-width: 1600px) {
    h1 {
      font-size: 4.5rem;
    }
  }

  @media (max-width: 1450px) {
    width: 600px;
    h1 {
      font-size: 4rem;
    }
    p {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 850px) {
    width: 400px;
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 0.8rem;
      width: 80vw;
    }

    .star1 {
      width: 80px;
      top: -40px;
      right: -20px;
    }
    .star2 {
      width: 50px;
      bottom: -40px;
      left: -20px;
    }
    .scroll {
      bottom: 30px;
      font-size: 0.8rem;
    }
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 1.8rem;
    }
    p {
      font-size: 0.7rem;
    }
    .scroll {
      font-size: 0.7rem;
    }
    .star2 {
      width: 40px;
      bottom: -20px;
      left: -20px;
    }
  }
`;
