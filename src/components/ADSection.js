import styled from "styled-components"
import PhotoSquare from "./PhotoSquare"
import { ADSectionData } from "../data"

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

const ADSection = () => {
    return (
        <Wrapper>
            <SectionTitle>Alerting Devices</SectionTitle>
            <CardsContainer>
                {ADSectionData.map((item) => (
                    <PhotoSquare imgLink={item.imgLink} imgAlt={item.imgAlt}/>
                ))}
            </CardsContainer>
        </Wrapper>
    )
}

export default ADSection;