import styled from "styled-components"
import theme from "../theme"

const Wrapper = styled.div`
    background-color: ${props => props.isDark ? theme.colors.darkGray: theme.colors.gray};
    border-radius: 30px;
    padding: 1.5rem 2rem;
    font-size: 20px;
    margin: 2rem 0rem;
`

const GreyCallout = ({ children, isDark }) => {
    return (
        <Wrapper isDark={isDark}>
            {children}
        </Wrapper>
    )
}

export default GreyCallout;