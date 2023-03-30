import styled from "styled-components";
import theme from "../theme";
import { Link } from 'react-router-dom';

const ButtonWrapper = styled.button`
    color: ${props => props.isActive ? theme.colors.white : theme.colors.purple};
    background-color: ${props => props.isActive ? theme.colors.purple : theme.colors.white};
    border-color: ${theme.colors.purple};
    border-style: solid;
    border-width: 5px;
    border-radius: 30px;
    font-size: 2rem;
    font-weight: 800;
    padding: 2rem 2rem;
    width: 25rem;
    cursor: pointer;
`

const Button = ({text, link, currentSection, setSection}) => {
    return (
        <Link to={link} style={{margin: "1rem auto"}} onClick={() => setSection(link)}>
            <ButtonWrapper isActive={currentSection === link}>{text}</ButtonWrapper>
        </Link>
    )
}

export default Button;