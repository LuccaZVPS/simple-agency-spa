import { Item } from "../Item";
import { Container } from "./styles";

export function Grid() {
  return (
    <Container>
      <Item color="#DFEDFD" text="Content Creator">
        <img src="/item2.png" alt="" />
      </Item>
      <Item color="#FDDFFA" text="Stragegy Planning">
        <img src="/item2.png" alt="" />
      </Item>
      <Item color="#FCFDDF" text="Product House">
        <img src="/item2.png" alt="" />
      </Item>
      <Item color="#DFFDF9" text="Creative Advertising">
        <img src="/item2.png" alt="" />
      </Item>
    </Container>
  );
}
