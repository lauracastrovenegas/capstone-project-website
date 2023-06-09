import styled from "styled-components"
import PhotoCard from "./PhotoCard"
import { ALDsSectionData } from "../data"

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
    grid-template-columns: 1fr 1fr;
`

const CardContainer = styled.button`
    flex: 1;
    margin: 2rem;
    background: none;
    border: none;
`

const ALDSection = ({ setItemSelected, isDark }) => {
    return (
        <Wrapper id="ALD">
            <SectionTitle>Assistive listening devices (ALDs)</SectionTitle>
            <CardsContainer>
                {ALDsSectionData.map((section) => (
                    <CardContainer onClick={() => setItemSelected(section)}>
                        <PhotoCard isDark={isDark} imgLink={section.imgLink} imgAlt={section.imgAlt} text={section.title} />
                    </CardContainer>
                ))}
            </CardsContainer>
        </Wrapper>
    )
}

export default ALDSection;