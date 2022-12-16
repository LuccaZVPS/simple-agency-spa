import { useRef, useState } from "react";
import { Container } from "./styles";
export function Carrousel() {
  const slider = useRef(null as unknown as HTMLDivElement);
  const [count, setCount] = useState(1);
  const [totalScroll, setTotalScroll] = useState(0);
  const goRight = () => {
    if (totalScroll !== slider.current.scrollWidth && totalScroll) {
      return;
    }
    if (!totalScroll) {
      setTotalScroll(slider.current.scrollWidth);
    }
    slider.current.style.marginLeft = `-${(count + 1) * 350}px`;
    setCount(count + 1);
  };
  const goLeft = () => {
    slider.current.style.marginLeft = `-${(count - 1) * 350}px`;
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };
  return (
    <Container>
      <div className="arrows">
        <img src="/arrow-left.png" alt="" onClick={goLeft} />
        <img src="/arrow-right.png" alt="" onClick={goRight} />
      </div>
      <div className="slider-container">
        <div className="slider" ref={slider}>
          <img src="/portfolio1.png" alt="" />
          <img src="/portfolio2.png" alt="" />
          <img src="/portfolio2.png" alt="" />
          <img src="/portfolio1.png" alt="" />
          <img src="/portfolio1.png" alt="" />
          <img src="/portfolio2.png" alt="" />
          <img src="/portfolio2.png" alt="" />
          <img src="/portfolio2.png" alt="" />
        </div>
      </div>
    </Container>
  );
}
