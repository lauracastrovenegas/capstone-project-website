import styled from "styled-components";
import theme from "../theme";
import React, { useState } from "react";

const OptionsBarWrap = styled.div`
    background-color: ${theme.colors.purple};
    display: flex;
    padding: 1rem 1rem;
`

const ButtonWrapper = styled.button`
    color: ${theme.colors.white};
    background-color: ${theme.colors.purple};
    border-color: ${theme.colors.white};
    border-style: solid;
    border-width: 2px;
    border-radius: 30px;
    font-size: 1rem;
    font-weight: 800;
    padding: 0.5rem 1rem;
    cursor: pointer;
    width: 7rem;
    margin: 0rem 1rem;

    :hover {
        color: ${theme.colors.purple};
        background-color: ${theme.colors.white};
    }
`

const ButtonsWrap = styled.div`
    margin: 0rem 1rem 0rem auto;
    width: fit-content;
`

const OptionButton = ({ options, setMode, mode }) => {
    const [selected, setSelected] = useState(1)

    const _handleSet = () => {
        setSelected(selected === 0 ? 1 : 0)
        setMode(!mode)
    }

    return (
        <ButtonWrapper onClick={() => _handleSet()}>{options[selected]}</ButtonWrapper>
    )
}

const OptionsBar = ({darkMode, setDarkMode, staticMode, setStaticMode}) => {
    return (
        <OptionsBarWrap role="toolbar">
            <ButtonsWrap>
                <OptionButton setMode={setDarkMode} mode={darkMode} options={["Light", "Dark"]} />
                <OptionButton setMode={setStaticMode} mode={staticMode} options={["Dynamic", "Static"]} />
            </ButtonsWrap>
        </OptionsBarWrap>
    )
}

export default OptionsBar;