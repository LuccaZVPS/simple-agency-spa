import styled from "styled-components";
import { Container as BrandStyles } from "../shared/Brand/styles";
export const Container = styled.footer`
  width: 100%;
  position: relative;
  display: flex;
  padding: 90px 90px 90px 90px;
  border-top: solid 2px var(--GRAY);
  flex-flow: row;
  .logo {
    display: flex;
    flex-direction: column;
    gap: 15px;
    .logo-brand {
      display: flex;
      align-items: center;
      gap: 20px;
      ${BrandStyles} {
        background-color: white;
        transform: scale(0.9);
      }
      h2 {
        font-size: 2rem;
      }
    }
    p {
      width: 400px;
      color: var(--GRAY);
    }
  }

  .footer-links {
    display: flex;
    flex: 1;
    justify-content: space-around;
    .footer-section {
      display: flex;
      flex-direction: column;
      h3 {
        margin-bottom: 25px;
      }
      a {
        color: var(--GRAY);
        text-decoration: none;
        margin-bottom: 15px;
        transition: 0.2s;
        :hover {
          color: var(--BLUE);
        }
      }
    }
  }

  @media (max-width: 1900px) {
    .logo {
      .logo-brand {
        h2 {
          font-size: 1.6rem;
        }
      }
      p {
        font-size: 0.9rem;
      }
    }
    .footer-links {
      .footer-section {
        h3 {
          font-size: 1rem;
        }
        a {
          font-size: 0.9rem;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    padding: 50px 20px 50px 20px;
    margin-top: 80px;
    .footer-links {
      gap: 10px;
    }
    .logo {
      p {
        width: 300px;
      }
    }
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 50px;
    .logo p {
      width: 90%;
    }
    .footer-links {
      flex-direction: column;
      gap: 30px;
    }
  }
`;
