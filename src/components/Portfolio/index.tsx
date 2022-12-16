import { Carrousel } from "./components/Carrousel";
import { Content } from "./components/Content";
import { Container } from "./styles";

export function Portfolio() {
  return (
    <Container id="portfolio">
      <Content />
      <Carrousel />
    </Container>
  );
}
