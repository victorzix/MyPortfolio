import styled from "styled-components";

export const Picture = styled.div`
  height: 7em;
  width: 7em;
  border-radius: 3.5em;
  background-image: url("https://media.licdn.com/dms/image/D4D03AQHUcUPZwBbVBg/profile-displayphoto-shrink_800_800/0/1675782232977?e=1687392000&v=beta&t=vLKkGvXiAs3fPSfF1IWARBTmx7BjfSC7vJJKCWchf9s");
  background-repeat: no-repeat;
  background-size: contain;
`;
export const HeaderTitle = styled.div`
  h2 {
    font-weight: 800;
  }
  h2::after {
    content: "";
    display: block;
    width: 1.9em;
    height: 4px;
    background-color: black;
  }
  span {
    font-size: 0.7em;
  }
  @font-face { 
        font-family: 'Montserrat';
        src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
        } 
        font-family: 'Montserrat';
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;

  @media(max-width: 500px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    text-align: center;
    margin-bottom: 2em;
    h2::after{
      display: none;
    }
}
`;

export const MainHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media(max-width: 500px){
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    margin-top: 2em;
}
`;

export const Socials = styled.div`
  font-weight: 500;
  display: flex;
  gap: 2em;
  height: 1em;
  @media(max-width: 500px){
    display: none;
}

  a {
    text-decoration: none;
    color: black;
  }
`;
