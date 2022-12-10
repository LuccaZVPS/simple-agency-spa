import { Container } from "./styles";

export function Content() {
  return (
    <Container>
      <div className="title-content">
        <img className="star1" src="/stars1.png" alt="" />
        <img className="star2" src="/stars2.png" alt="" />
        <h1>
          We Are Agency <br />
          in Digital Age
        </h1>
      </div>

      <p>
        We believe that real and magical entertainment experiences a blend of
        culture and technology
      </p>
      <div className="scroll">
        Scroll to explore more <img src="arrow.png" alt="" />
      </div>
    </Container>
  );
}
