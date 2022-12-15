import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  .slider-container {
    padding-bottom: 15px;
    padding-top: 15px;
  }
  .arrows {
    width: 100%;
    display: flex;
    justify-content: right;
    gap: 20px;
    img {
      cursor: pointer;
    }
  }

  .slider {
    transition: 0.6s;
    display: flex;
    flex-wrap: nowrap;
    gap: 30px;
    width: auto;
    img {
      width: 450px;
    }
  }

  @media (max-width: 1900px) {
    .slider {
      img {
        width: 400px;
      }
    }
  }

  @media (max-width: 1450px) {
    .slider {
      img {
        width: 300px;
      }
    }
  }

  @media (max-width: 850px) {
    overflow: auto;
    height: 100%;

    .arrows {
      display: none;
    }
    .slider {
      img {
        width: 200px;
      }
    }
  }
`;
