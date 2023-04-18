import styled from "styled-components"
import PhotoSquare from "./PhotoSquare"
import { ADSectionData } from "../data"
import Popup from "./Popup"
import { useState } from "react"

const Wrapper = styled.div`
    margin: 3rem 2rem;
`

const SectionTitle = styled.h2`
    font-weight: 700;
    text-align: center;
    font-size: 2rem;
`

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

const ADSection = ({setItemSelected}) => {
    return (
        <Wrapper>
            <SectionTitle>Alerting Devices</SectionTitle>
            <CardsContainer>
                {ADSectionData.map((item) => (
                    <div onClick={() => setItemSelected(item)}>
                        <PhotoSquare imgLink={item.imgLink} imgAlt={item.imgAlt}/>
                    </div>
                ))}
            </CardsContainer>
        </Wrapper>
    )
}

export default ADSection;