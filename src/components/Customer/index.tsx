import { Content } from "./components/Content";
import { Grid } from "./components/Grid";
import { Container } from "./styles";

export function Customer() {
  return (
    <Container id="customer">
      <Content />
      <Grid />
      <img className="mountain-customer" src="/mountain-customer.png" alt="" />
    </Container>
  );
}
