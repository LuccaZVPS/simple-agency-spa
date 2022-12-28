import styled from "styled-components";

export const Container = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-left: 40px;
  padding-right: 40px;
  margin-bottom:40px;
  .cloud1 {
    position: absolute;
    top: 20px;
    left: 0;
    width: 350px;
    z-index: 1;
  }
  .cloud2 {
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 250px;
    z-index: 1;
  }

  @media (max-width: 1200px) {
    justify-content: space-around;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: space-evenly;
    height: auto;
    padding-top: 40px;
    padding-bottom: 40px;
    gap: 40px;
    .cloud1 {
      width: 200px;
    }
    .cloud2 {
      width: 150px;
    }
  }
`;
