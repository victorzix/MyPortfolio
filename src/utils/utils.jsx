import styled from "styled-components";
import { useEffect, useState } from "react";

const Button = styled.button`
  position: fixed;
  bottom: 50px;
  right: ${(props) => {
    return props.backToTopButton ? "70px" : "-150px";
  }};
  height: 50px;
  padding: 1em;
  border: 0;
  background-color: var(--txt-yellow);
  font-weight: 900;
  border-radius: 0.5em;
  color: var(--dark-blue);
  transition: all ease-in-out 1s;
  cursor: pointer;
`;

export function BackToTopBtn() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 750) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  function scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <Button onClick={scrollUp} backToTopButton={backToTopButton}>
        Voltar ao Topo
      </Button>
    </>
  );
}
