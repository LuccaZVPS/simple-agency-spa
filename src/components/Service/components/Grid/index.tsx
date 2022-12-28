import { Item } from "../Item";
import { Container } from "./styles";

export function Grid() {
  return (
    <Container>
      <Item color="#DFEDFD" text="Content Creator">
        <img src="/artist.png" alt="" />
      </Item>
      <Item color="#FDDFFA" text="Stragegy Planning">
        <img src="/strategy.png" alt="" />
      </Item>
      <Item color="#FCFDDF" text="Product House">
        <img src="/house.png" alt="" />
      </Item>
      <Item color="#DFFDF9" text="Creative Advertising">
        <img src="/creative.png" alt="" />
      </Item>
    </Container>
  );
}
