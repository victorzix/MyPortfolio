import styled from "styled-components";


export default function Footer() {

    const Footer = styled.footer`
        font-size: .6em;
        border-top: 1px solid gray;
        width: 100%;
        padding: .5em;
        display: flex;
        justify-content: space-between;

        a{
            display: none;
        }


        @media(max-width: 500px){
            display: flex;
            padding: .4em 2em 2em 2em;

            a{
                text-decoration: none;
                color: black;
                display: block;
            }
        }
    `
  return (
    <Footer >
      <span>&copy; 2023 VICTOR RAPHAEL</span>
      <a href="https://www.linkedin.com/in/victorphael/">Linkedin</a>
      <span>victoraphaelnev@gmail.com</span>
    </Footer>
  );
}
