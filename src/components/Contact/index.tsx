import { ContactButton } from "../shared/ContactButton";
import { Container } from "./styles";

export function Contact() {
  return (
    <Container>
      <div className="background">
        <h2>Ready to make your dream come true?</h2>
        <p>We will help you make it happen</p>
        <ContactButton />
      </div>
    </Container>
  );
}
