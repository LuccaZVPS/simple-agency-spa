import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  width: 756px;
  justify-items: center;
  align-items: center;
  row-gap: 20px;
  @media (max-width: 1200px) {
    width: 400px;
    column-gap: 30px;
  }

  @media (max-width: 850px) {
    width: 100%;
    grid-template-columns: 1fr repeat(auto-fill, 1fr) 1fr;
  }

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
  }
`;
