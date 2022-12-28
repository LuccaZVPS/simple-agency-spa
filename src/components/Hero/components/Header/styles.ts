import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  position: relative;
  transition: 0.5s;
  z-index:100;
  .menu {
    display: none;
    position: absolute;
    background-color: transparent;
    left: -40px;
    top: 10px;
    width: 25px;
    height: 40px;
    display: flex;
    transition: 0.5s;
    span {
      display: none;
      position: absolute;
      height: 2.5px;
      width: 100%;
      background-color: black;
      transition: all cubic-bezier(0.26, 0.1, 0.27, 1.55) 0.35s;
    }
    .line1 {
      top: 20%;
    }
    .line2 {
      top: 40%;
    }
    .line3 {
      top: 60%;
    }

    .open1 {
      transform: rotate(40deg);
      top: 40%;
    }
    .open2 {
      transform: rotate(40deg);
    }
    .open3 {
      transform: rotate(-40deg);
      top: 40%;
    }
  }
  .close {
    left: 160px;
  }

  @media (max-width: 850px) {
    background: var(--BACKGROUND);
    height: 100%;
    flex-direction: column;
    position: fixed;
    z-index: 200;
    justify-content: space-evenly;
    width: 200px;
    right: -200px;
    gap: 100px;
    box-shadow: 0 0 10px black;
    .menu {
      display: flex;
      span {
        display: flex;
      }
    }
  }
`;
