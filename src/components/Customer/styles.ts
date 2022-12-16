import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 550px;
  flex-flow: column;
  .mountain-customer {
    position: absolute;
    bottom: 0;
    z-index: 1;
  }
  @media (max-width: 1200px) {
    height: 400px;
    .mountain-customer {
      width: 600px;
    }
  }
`;
