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

const CardContainer = styled.div`
    flex: 1;
    margin: 2rem;
`

const ALDSection = ({ setItemSelected }) => {
    return (
        <Wrapper>
            <SectionTitle>Assistive listening devices (ALDs)</SectionTitle>
            <CardsContainer>
                {ALDsSectionData.map((section) => (
                    <CardContainer onClick={() => setItemSelected(section)}>
                        <PhotoCard imgLink={section.imgLink} imgAlt={section.imgAlt} text={section.title} />
                    </CardContainer>
                ))}
            </CardsContainer>
        </Wrapper>
    )
}

export default ALDSection;