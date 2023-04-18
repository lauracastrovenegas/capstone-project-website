import styled from "styled-components";
import theme from "./theme";
import GreyCallout from "./components/GreyCallout";
import SquareCard from "./components/SquareCard";
import ALDSection from "./components/ALDSection";
import AACSection from "./components/AACSection";
import ADSection from "./components/ADSection";
import NextButton from "./components/NextButton";

const PageWrapper = styled.div`
    margin-bottom: 4rem;
`

const MainTitle = styled.h1`
    text-transform: capitalize;
    font-size: 4vw;
`

const PurpleText = styled.span`
    color: ${theme.colors.purple};
`

const BoldText = styled.span`
    font-weight: 800;
`

const Row1 = styled.div`
    display: flex;
`

const AssistiveTech = ({setSection}) => {
    return (
        <PageWrapper>
            <MainTitle>What types of <PurpleText>assistive devices</PurpleText> are available for <PurpleText>Deaf/Hard-of-Hearing</PurpleText> People?</MainTitle>
            <GreyCallout><BoldText>What is an assistive device?</BoldText> The terms assistive device or assistive technology can refer to any device that helps a person with hearing loss or a voice, speech, or language disorder to communicate. These terms often refer to devices that help a person to hear and understand what is being said more clearly or to express thoughts more easily.</GreyCallout>
            <Row1>
                <SquareCard>Assistive listening devices (ALDs)</SquareCard>
                <SquareCard>Augmentative and alternative communication (AAC) devices</SquareCard>
                <SquareCard>Alerting devices</SquareCard>
            </Row1>
            <ALDSection/>
            <AACSection/>
            <ADSection/>
            <NextButton text="Learn ASL" link="/asl" setSection={setSection}/>
        </PageWrapper>
    )    
}

export default AssistiveTech;