import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-left: 40px;
  padding-right: 40px;

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
  }
`;
