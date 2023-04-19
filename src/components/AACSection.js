import styled from "styled-components"
import { AACSectionData } from "../data"
import SubsectionCarousel from "./SubsectionCarousel"

const Wrapper = styled.div`
    margin: 3rem 2rem;
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

const AACSection = ({setItemSelected, isDark}) => {
    return (
        <Wrapper>
            <SectionTitle>Augmentative and alternative communication (AAC) devices</SectionTitle>
            <CardsContainer>
                <SubsectionCarousel title="Face to Face" items={AACSectionData[0]} isDark={isDark}/>
                <SubsectionCarousel title="By Telephone" items={AACSectionData[1]} isDark={isDark}/>
            </CardsContainer>
        </Wrapper>
    )
}

export default AACSection;