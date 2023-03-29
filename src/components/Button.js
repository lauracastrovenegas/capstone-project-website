import styled from "styled-components";

const ButtonWrapper = styled.button`
    color: ${props => props.isActive ? "white" : "white"};
`

function Button({isActive, text}) {
    return (
        <ButtonWrapper isActive={isActive}>{text}</ButtonWrapper>
    )
}

export default Button;