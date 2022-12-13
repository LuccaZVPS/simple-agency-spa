import { ContactButton } from "../shared/ContactButton";
import { Container } from "./styles";

export function Contact() {
  return (
    <Container>
      <img src="/contact-background.png" alt="" />
      <div className="content-contact">
        <h2>Ready to make your dreams come true?</h2>
        <p>We will help you make it happen</p>
        <ContactButton />
      </div>
    </Container>
  );
}
