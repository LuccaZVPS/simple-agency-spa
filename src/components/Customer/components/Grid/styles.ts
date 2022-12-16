import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 700px;
  z-index: 100;
  flex: 1;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: flex-end;
  justify-items: center;
  margin-bottom: 20px;

  @media (max-width: 1900px) {
    img {
      width: 55px;
    }
  }

  @media (max-width: 1450px) {
    img {
      width: 48px;
    }
  }

  @media (max-width: 850px) {
    width: 100%;
    img {
      width: 40px;
    }
  }
  @media (max-width: 500px) {
    img {
      width: 30px;
    }
  }
`;
