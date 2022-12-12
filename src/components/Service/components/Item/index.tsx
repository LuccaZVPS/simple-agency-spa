import { Container } from "./styles";
import { ReactNode } from "react";
interface props {
  children: ReactNode;
  color: string;
  text: string;
}
export function Item({ children, color, text }: props) {
  return (
    <Container color={color}>
      {children}
      <h3>{text}</h3>
    </Container>
  );
}
