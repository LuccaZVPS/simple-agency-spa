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
  h1 {
    font-size: 5rem;
    text-align: center;
  }
  p {
    font-size: 1.2rem;
    text-align: center;
  }
  div {
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
    top: 170px;
    right: 0;
  }
  .star2 {
    position: absolute;
    bottom: 170px;
    left: 0;
  }
`;
