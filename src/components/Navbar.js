import styled from "styled-components";
import Button from "./Button";

const NavWrapper = styled.nav`
    display: flex;
`

const Navbar = ({setSection, currentSection}) => {    
    return (
        <NavWrapper>
                <Button text="Assistive Tech" link="/" currentSection={currentSection} setSection={setSection}/>
                <Button text="Learn ASL" link="/asl" currentSection={currentSection} setSection={setSection}/>
        </NavWrapper>
    )
}

export default Navbar;