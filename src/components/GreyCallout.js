import styled from "styled-components"
import theme from "../theme"

const Wrapper = styled.div`
    background-color: ${theme.colors.gray};
    border-radius: 30px;
    padding: 1.5rem 2rem;
    font-size: 20px;
    margin: 2rem 0rem;
`

const GreyCallout = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default GreyCallout;