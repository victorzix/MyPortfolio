import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import { FaArrowUp} from "react-icons/fa"

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

  @media(max-width: 840px){
    z-index: 100;
    bottom: 150px;

    right: ${(props) => {
    return props.backToTopButton ? "25px" : "-150px";
  }};
  }

  @media(max-width: 840px){
    z-index: 100;
    bottom: 50px;
    height: 3em;
    width: 3em;
    border-radius: 1.5em;
    padding: 0;

    right: ${(props) => {
    return props.backToTopButton ? "25px" : "-150px";
  }};
  }
`;

export function BackToTopBtn() {
  const [backToTopButton, setBackToTopButton] = useState(false);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  
  const width = windowSize.current[0];

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

if(width <= 840){
  return(
    <Button onClick={scrollUp} backToTopButton={backToTopButton}>
      < FaArrowUp/>
    </Button>
  )
}
  return (
    <>
      <Button onClick={scrollUp} backToTopButton={backToTopButton}>
        Voltar ao Topo
      </Button>
    </>
  );
}
