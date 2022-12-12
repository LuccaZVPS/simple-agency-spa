import styled from "styled-components";
interface props {
  color: string;
}
export const Container = styled.div<props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  h3 {
    font-size: 1.8rem;
    background-color: ${({ color }) => color};
    width: 300px;
    border-radius: 4px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    padding: 10px 0px 10px 0px;
  }
`;
