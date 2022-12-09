import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Container } from "./styles";

export function Hero() {
  return (
    <Container>
      <Header />
      <Content />
      <img className="m1" src="/mountain.svg" alt="" />
      <img className="m2" src="/mountain2.png" alt="" />
    </Container>
  );
}
