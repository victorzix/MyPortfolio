import { Picture, HeaderTitle, Div, MainHeader, Socials } from "./HeaderStyles"

export default function AboutMeHeader(){
    return(
        <MainHeader>

        <Div>
            <Picture/>
            <HeaderTitle>
                <h2>VICTOR R.</h2>
                <span>Front-end Student</span>
            </HeaderTitle>
        </Div>
        <Socials>       
           <a href="https://github.com/victorzix" target="_blank">Github</a>
           <a href="https://www.linkedin.com/in/victorphael/" target="_blank">Linkedin</a>
        </Socials>
        </MainHeader>
    )
}