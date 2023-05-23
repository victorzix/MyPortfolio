import styled from "styled-components";

const Div = styled.div`

    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
    margin-bottom: 3em;
    
    @font-face { 
        font-family: 'Montserrat';
        src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
        } 
        font-family: 'Montserrat';

    h2 {
      font-weight: 800;
      &::after {
        content: "";
        display: block;
        width: 1.9em;
        height: 4px;
        background-color: black;
      }
    }

    @media(max-width:500px) {
     
        display: none;
      
    }

`;

export default function Top() {
  return (
    <Div className="title">
        <h2>VIC</h2>
    </Div>
  );
}
