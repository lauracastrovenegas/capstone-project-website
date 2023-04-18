import styled from "styled-components";
import theme from "../theme";
import { Link } from 'react-router-dom';

const ButtonWrapper = styled.button`
    color: ${props => props.isDark ? 
        props => props.isActive ? theme.colors.white : theme.colors.purple
        : props => props.isActive ? theme.colors.white : theme.colors.purple};
    
    background-color: ${props => props.isDark ? 
        props => props.isActive ? theme.colors.purple : theme.colors.black
        : props => props.isActive ? theme.colors.purple : theme.colors.white};
    
    border-color: ${theme.colors.purple};
    border-style: solid;
    border-width: 5px;
    border-radius: 30px;
    font-size: 2rem;
    font-weight: 800;
    padding: 1.5rem 2rem;
    width: 23rem;
    cursor: pointer;

    :hover {
        background-color: ${theme.colors.purple};
        color: white;
    }
`

const Button = ({text, link, currentSection, setSection, isDark}) => {

    return (
        <Link to={link} style={{margin: "1rem auto"}} onClick={() => setSection(link)}>
            <ButtonWrapper isActive={currentSection === link} isDark={isDark}>{text}</ButtonWrapper>
        </Link>
    )
}

export default Button;