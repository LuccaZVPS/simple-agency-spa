import { Brand } from "../shared/Brand";
import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <div className="logo">
        <div className="logo-brand">
          <Brand />
          <h2>Eclair</h2>
        </div>

        <p>
          We believe that real and magical entertainment experiences a blend of
          culture and technology
        </p>
      </div>

      <div className="footer-links">
        <div className="footer-section">
          <h3>Company</h3>
          <a href="#link">About</a>
          <a href="#link">Career</a>
          <a href="#link">Sitemap</a>
        </div>
        <div className="footer-section">
          <h3>Social</h3>
          <a href="#link">Instagram</a>
          <a href="#link">Facebook</a>
          <a href="#link">Twitter</a>
        </div>
        <div className="footer-section">
          <h3>Terms & Policies</h3>
          <a href="#link">Terms of service</a>
          <a href="#link">Privacy Policy</a>
        </div>
      </div>
    </Container>
  );
}
