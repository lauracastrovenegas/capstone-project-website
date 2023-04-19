import styled from "styled-components";
import theme from "./theme";
import GreyCallout from "./components/GreyCallout";
import NextButton from "./components/NextButton";
import { useState } from "react";
import Popup from "./components/Popup";
import { AssistiveTechData } from "./data";
import { ALDsSectionData, AACSectionData, ADSectionData } from "./data";
import YoutubeEmbed from "./components/YoutubeEmbed";
import PhotoSquare from "./components/PhotoSquare";

const PageWrapper = styled.div`
    padding-bottom: 4rem;
    padding-top: 1rem;
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

const SectionTitle = styled.h2`
    font-weight: 700;
    text-align: center;
    font-size: 2rem;
`

const Text = styled.p`
    font-size: 1.2rem;
    width: 60vw;
    margin: 0rem auto;
    text-align: center;
`

const Subtitle = styled.h2`
    font-weight: 700;
    text-align: center;
    color: ${props => props.isDark ? theme.colors.lightPurple : theme.colors.purple};
    margin-top: 4rem;
`

const Video = styled.h2`
    width: 50vw;
    margin: 0rem auto;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

const AssistiveTechStatic = ({ setSection, isDark }) => {
    const [itemSelected, setItemSelected] = useState(null);

    return (
        <PageWrapper>
            <Popup item={itemSelected} setItemSelected={setItemSelected} isDark={isDark} />
            <MainTitle>What types of <PurpleText>assistive devices</PurpleText> are available for <PurpleText>Deaf/Hard-of-Hearing</PurpleText> People?</MainTitle>
            <GreyCallout isDark={isDark}><BoldText>What is an assistive device?</BoldText> The terms assistive device or assistive technology can refer to any device that helps a person with hearing loss or a voice, speech, or language disorder to communicate. These terms often refer to devices that help a person to hear and understand what is being said more clearly or to express thoughts more easily.</GreyCallout>
            <SectionTitle>{AssistiveTechData[0].title}</SectionTitle>
            <Text>{AssistiveTechData[0].text}</Text>
            {ALDsSectionData.map((item) => (
                <>
                    <Subtitle isDark={isDark}>{item.title}</Subtitle>
                    <Video><YoutubeEmbed videoLink={item.videoLink} /></Video>

                </>
            ))}

            <SectionTitle>{AssistiveTechData[1].title}</SectionTitle>
            <Text>{AssistiveTechData[1].text}</Text>
            <Subtitle isDark={isDark}>{"Face to Face"}</Subtitle>
            <Grid>
                {AACSectionData[0].map((item) => (
                    <PhotoSquare imgAlt={item.imgAlt} imgLink={item.imgLink} title={item.title} isStatic/>
                ))}
            </Grid>
            <Subtitle isDark={isDark}>{"By Telephone"}</Subtitle>
            <Grid>
                {AACSectionData[1].map((item) => (
                    <PhotoSquare imgAlt={item.imgAlt} imgLink={item.imgLink} title={item.title} isStatic/>
                ))}
            </Grid>


            <SectionTitle>{AssistiveTechData[2].title}</SectionTitle>
            <Text>{AssistiveTechData[2].text}</Text>
            {ADSectionData.map((item) => (
                <>
                    <Subtitle isDark={isDark}>{item.title}</Subtitle>
                    <Video><YoutubeEmbed videoLink={item.videoLink} /></Video>

                </>
            ))}

            <NextButton text="Learn ASL" link="/asl" setSection={setSection} isDark={isDark} />
        </PageWrapper>
    )
}

export default AssistiveTechStatic;