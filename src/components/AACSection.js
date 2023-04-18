import styled from "styled-components"
import { AACSectionData } from "../data"
import SubsectionCarousel from "./SubsectionCarousel"

const Wrapper = styled.div`
    margin: 2rem 2rem;
`

const SectionTitle = styled.h2`
    font-weight: 700;
    text-align: center;
    font-size: 2rem;
`

const CardsContainer = styled.div`


`

const Row = styled.div`
    display: flex;
`

const AACSection = () => {
    return (
        <Wrapper>
            <SectionTitle>Augmentative and alternative communication (AAC) devices</SectionTitle>
            <CardsContainer>
                <SubsectionCarousel title="Face to Face"/>
                <SubsectionCarousel title="By Telephone"/>
            </CardsContainer>
        </Wrapper>
    )
}

export default AACSection;