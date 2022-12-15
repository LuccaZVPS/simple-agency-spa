import { Contact } from "../Contact";
import { Hero } from "../Hero";
import { Portfolio } from "../Portfolio";
import { Service } from "../Service";
import { Container } from "./styles";

export function Wrapper() {
  return (
    <Container>
      <Hero />
      <Service />
      <Portfolio />
      <Contact />
    </Container>
  );
}
