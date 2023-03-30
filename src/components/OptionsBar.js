import styled from "styled-components";
import theme from "../theme";
import React, {useState} from "react";

const OptionsBarWrap = styled.div`
    background-color: ${theme.colors.purple};
    display: flex;
    width: 100vw;
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
    padding: 1rem 1rem;
    cursor: pointer;
    width: 10rem;
    margin: 0rem 1rem;
`

const ButtonsWrap = styled.div`
    margin: 0rem 1rem 0rem auto;
    width: fit-content;
`

const OptionButton = ({options}) => {
    const [selected, setSelected] = useState(0)

    return (
        <ButtonWrapper onClick={() => setSelected(selected === 0 ? 1 : 0)}>{options[selected]}</ButtonWrapper>
    )
}

const OptionsBar = () => {
    return (
        <OptionsBarWrap>
            <ButtonsWrap>
                <OptionButton options={["Light", "Dark"]}/>
                <OptionButton options={["Static", "Dynamic"]}/>
            </ButtonsWrap>
        </OptionsBarWrap>
    )
}

export default OptionsBar;