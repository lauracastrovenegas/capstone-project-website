import styled from "styled-components"

const Text = styled.div`
    margin: auto auto;
    font-size: 1.5rem;
    font-weight: 800;
    height: fit-content;
    text-align: center;
`

const SquareCard = ({children}) => {
    return (
        <Text>{children}</Text>
    )
}

export default SquareCard;