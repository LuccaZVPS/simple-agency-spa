import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-flow: column;
  padding: 40px 75px 40px 75px;
  align-items: center;
  .m1 {
    position: absolute;
    left: 0px;
    bottom: 0;
    animation: moutain-up 1.3s;
    z-index: 1;
  }
  .m2 {
    position: absolute;
    right: 0px;
    bottom: 0;
    animation: moutain-up 1.3s;
    z-index: 1;
  }

  @keyframes moutain-up {
    0% {
      opacity: 0;
      bottom: -300px;
    }
    100% {
      opacity: 1;
      bottom: 0;
    }
  }

  @media (max-width: 1450px) {
    padding: 30px 55px 30px 55px;

    .m1 {
      position: absolute;
      width: 400px;
    }
    .m2 {
      width: 400px;
    }
  }

  @media (max-width: 1200px) {
    .m1 {
      position: absolute;
      width: 300px;
    }
    .m2 {
      width: 350px;
      right: -30px;
    }
  }
  @media (max-width: 850px) {
    padding: 0;
    .m1 {
      position: absolute;
      width: 250px;
    }
    .m2 {
      width: 300px;
      right: -30px;
    }
  }
`;
