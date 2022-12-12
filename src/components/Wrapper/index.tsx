import { Hero } from "../Hero";
import { Service } from "../Service";
import { Container } from "./styles";

export function Wrapper() {
  return (
    <Container>
      <Hero />
      <Service />
    </Container>
  );
}
