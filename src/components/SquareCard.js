import styled from "styled-components"
import theme from "../theme"

const Wrapper = styled.div`
    display: flex;
    background-color: white;
    border-radius: 15px;
    padding: 3rem 1.5rem;
    flex: 1;
    margin: 2rem 1rem;
    box-shadow: 0px 67.11px 109.06px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(216, 216, 216, 0.4);

    transition: transform 1s;
    
    :hover{
        transform: scale(1.05);
        cursor: pointer;
        color: white;
        background-color: ${theme.colors.purple};
    }
`

const Text = styled.div`
    margin: auto auto;
    font-size: 1.5rem;
    font-weight: 800;
    height: fit-content;
    text-align: center;
`

const SquareCard = ({children}) => {
    return (
        <Wrapper>
            <Text>{children}</Text>
        </Wrapper>
    )
}

export default SquareCard;