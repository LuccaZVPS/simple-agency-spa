import { Brand } from "../../../shared/Brand";
import { Container } from "./styles";

export function Logo() {
  return (
    <Container>
      <Brand />
      <div className="logo-name">Eclair</div>
    </Container>
  );
}
