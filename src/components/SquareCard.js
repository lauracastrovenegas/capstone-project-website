import styled from "styled-components"
import theme from "../theme"

const Text = styled.div`
    margin: auto auto;
    font-size: 1.5rem;
    font-weight: 800;
    height: fit-content;
    text-align: center;
    //color: white;
`

const SquareCard = ({children, isDark}) => {
    return (
        <Text isDark={isDark}>{children}</Text>
    )
}

export default SquareCard;