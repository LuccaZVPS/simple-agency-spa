import styled from "styled-components";

export const Container = styled.div`
  font-weight: bold;
  transition: 1s;
  width: 80px;
  height: 80px;
  background-color: var(--SECONDARY);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    color: var(--BLUE);
    width: fit-content;
    height: fit-content;
    transform: rotate(-15deg);
    font-size: 3.75rem;
  }
`;
