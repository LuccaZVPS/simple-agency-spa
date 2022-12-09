import { ContactButton } from "../../../shared/ContactButton";
import { Logo } from "../Logo";
import { Nav } from "../Nav";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <Logo />
      <Nav />
      <ContactButton />
    </Container>
  );
}
