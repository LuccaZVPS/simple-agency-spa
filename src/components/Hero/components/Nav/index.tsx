import { Container } from "./styles";

export function Nav() {
  return (
    <Container>
      <ul>
        <li>
          <a href="#service">Service</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#customer">Customer</a>
        </li>
      </ul>
    </Container>
  );
}
