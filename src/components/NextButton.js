import styled from "styled-components";
import theme from "../theme";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
    display: flex;
    margin-top: 2rem;
`

const ButtonWrapper = styled.button`
    color: ${theme.colors.purple};
    background-color: ${props => props.isDark ? theme.colors.black : theme.colors.white};
    border-color: ${theme.colors.purple};
    border-style: solid;
    border-width: 5px;
    border-radius: 30px;
    padding: 1.5rem 2rem;
    width: 23rem;
    cursor: pointer;

    :hover {
        background-color: ${theme.colors.purple};
        color: white;
    }
`

const Text = styled.div`
    font-size: 2rem;
    font-weight: 800;
    width: fit-content;
    display: flex;
    margin: 0rem auto;

    svg {
        margin: auto 0rem auto 1rem;
        font-size: 1.5rem;
    }
`

const NextButton = ({text, link, setSection, isDark}) => {
    return (
        <Wrapper>
            <Link to={link} style={{margin: "1rem auto"}} onClick={() => setSection(link)}>
            <ButtonWrapper isDark={isDark}>
                <Text>{text} <FontAwesomeIcon icon={faChevronRight}/></Text>
            </ButtonWrapper>
        </Link>
        </Wrapper>
    )
}

export default NextButton;