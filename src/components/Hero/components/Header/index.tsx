import { ContactButton } from "../../../shared/ContactButton";
import { Logo } from "../Logo";
import { Nav } from "../Nav";
import { Container } from "./styles";
import { useRef, useState } from "react";
export function Header() {
  const header = useRef(null as unknown as HTMLDivElement);
  const menuButton = useRef(null as unknown as HTMLDivElement);

  const [isOpen, setIsOpen] = useState(false);
  const menu = () => {
    if (!isOpen) {
      header.current.style.right = "0px";
      closeAnimation();
      setIsOpen(true);
      return;
    }

    header.current.style.right = "-200px";
    openAnimation();
    setIsOpen(false);
  };

  const closeAnimation = () => {
    const lines = menuButton.current.children as unknown as HTMLSpanElement[];
    menuButton.current.classList.add("close");
    for (let index = 0; index < lines.length; index++) {
      lines[index].classList.add(`open${index + 1}`);
    }
  };

  const openAnimation = () => {
    const lines = menuButton.current.children as unknown as HTMLSpanElement[];
    menuButton.current.classList.remove("close");

    for (let index = 0; index < lines.length; index++) {
      lines[index].classList.remove(`open${index + 1}`);
    }
  };
  return (
    <Container ref={header}>
      <Logo />
      <Nav />
      <ContactButton />
      <div className="menu" onClick={menu} ref={menuButton}>
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>
    </Container>
  );
}
