import { Content } from "./components/Content";
import { Grid } from "./components/Grid";
import { Container } from "./styles";

export function Service() {
  return (
    <Container>
      <Content />
      <Grid />
      <img className="cloud1" src="/cloud.png" alt="" />
      <img className="cloud2" src="/cloud.png" alt="" />
    </Container>
  );
}
