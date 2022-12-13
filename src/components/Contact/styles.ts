import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .background {
    width: 90%;
    height: 471px;
    background-image: url("/contact-background.png");
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    h2 {
      font-size: 3.5rem;
      width: 600px;
      text-align: center;
    }
    p {
      text-align: center;
      font-size: 1.1rem;
    }
  }
`;
