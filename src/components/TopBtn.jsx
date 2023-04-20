import styled from "styled-components";
import { useEffect, useState } from "react";
import { FcUp } from "react-icons/all";

export default function TopBtn() {
  const Button = styled.button`
    position: fixed;
    bottom: 50px;
    right: 50px;
    height: 3em;
    width: 3em;
    background: rgba(175, 210, 245, 0.227);
    border: none;
    border-radius: 1.5em;
    cursor: pointer;
  `;

  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 700) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {backToTopButton && (
        <Button onClick={scrollUp}>
          <FcUp />
        </Button>
      )}
    </>
  );
}
