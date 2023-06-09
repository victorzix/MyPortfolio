import styled from "styled-components";

const Anchor = styled.a`
    text-decoration: none;
    color: var(--dark-blue);
    font-weight: 600;
    
`;
const Container = styled.header`
  height: 8em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--ice-white);
  padding: 0 10em;

  div{
    display: flex;
    gap: 6em;
  }
`;

export default function Header() {
  return (
    <Container>
      <div>
        <Anchor href="#">SOBRE MIM</Anchor>
        <Anchor href="#">HABILIDADES</Anchor>
        <Anchor href="#">PROJETOS</Anchor>
      </div>
        <Anchor href="#">CURRICULO</Anchor>
    </Container>
  );
}
