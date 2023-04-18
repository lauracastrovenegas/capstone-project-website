import styled from "styled-components"
import PhotoCard from "./PhotoCard"
import { ALDsSectionData } from "../data"

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

const ALDSection = () => {
    return (
        <Wrapper>
            <SectionTitle>Assistive listening devices (ALDs)</SectionTitle>
            <CardsContainer>
                <Row>
                    <PhotoCard imgLink={ALDsSectionData[0].imgLink} imgAlt={ALDsSectionData[0].imgAlt} text={ALDsSectionData[0].text}/>
                    <PhotoCard imgLink={ALDsSectionData[1].imgLink} imgAlt={ALDsSectionData[1].imgAlt} text={ALDsSectionData[1].text}/>
                </Row>
                <Row>
                    <PhotoCard imgLink={ALDsSectionData[2].imgLink} imgAlt={ALDsSectionData[2].imgAlt} text={ALDsSectionData[2].text}/>
                    <PhotoCard imgLink={ALDsSectionData[3].imgLink} imgAlt={ALDsSectionData[3].imgAlt} text={ALDsSectionData[3].text}/>
                </Row>
            </CardsContainer>
        </Wrapper>
    )
}

export default ALDSection;