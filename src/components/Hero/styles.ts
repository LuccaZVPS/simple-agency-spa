import styled from "styled-components";

export const Container = styled.div`
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
  }
  .m2 {
    position: absolute;
    right: 0px;
    bottom: 0;
    animation: moutain-up 1.3s;
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
`;
