import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 30px;
  padding-left: 100px;
  padding-right: 100px;
  position: relative;
  img {
    width: 100%;
    height: auto;
    border-radius: 30px;
  }
  .content-contact {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    gap: 20px;
    h2 {
      font-size: 3.5rem;
    }
    p {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 1450px) {
    .content-contact {
      height: 100%;
      background-size: auto;

      h2 {
        text-align: center;
        width: 100%;
        font-size: 2.8rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 1200px) {
    padding-left: 30px;
    padding-right: 30px;
    .content-contact {
      h2 {
        font-size: 2.4rem;
      }
      p {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 850px) {
    padding-left: 5px;
    padding-right: 5px;
    height: 400px;
    img {
      height: 400px;
      width: auto;
      margin-left: 280px;
    }
    .content-contact {
      h2 {
        font-size: 2rem;
      }
      p {
        font-size: 0.85rem;
      }
    }
  }
`;
