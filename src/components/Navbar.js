import styled from "styled-components";
import Button from "./Button";

const NavWrapper = styled.nav`
    display: flex;
    padding: 1rem 10rem;
    background-color: ${props => props.isDark ? 'black' : 'white'};
`

const Navbar = ({setSection, currentSection, isDark}) => {    
    return (
        <NavWrapper isDark={isDark}>
                <Button isDark={isDark} text="Assistive Tech" link="/" currentSection={currentSection} setSection={setSection}/>
                <Button isDark={isDark} text="Learn ASL" link="/asl" currentSection={currentSection} setSection={setSection}/>
        </NavWrapper>
    )
}

export default Navbar;