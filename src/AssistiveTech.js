import styled from "styled-components/macro";
import theme from "./theme";
import GreyCallout from "./components/GreyCallout";
import SquareCard from "./components/SquareCard";
import ALDSection from "./components/ALDSection";
import AACSection from "./components/AACSection";
import ADSection from "./components/ADSection";
import NextButton from "./components/NextButton";
import { useState } from "react";
import Popup from "./components/Popup";
import { AssistiveTechData } from "./data";

const PageWrapper = styled.div`
    padding-bottom: 4rem;
    padding-top: 1rem;
`

const MainTitle = styled.h1`
    text-transform: capitalize;
    font-size: 4vw;
`

const PurpleText = styled.span`
    color: ${props => props.isDark ? theme.colors.lightPurple : theme.colors.purple};
`

const BoldText = styled.span`
    font-weight: 800;
`

const Row1 = styled.div`
    display: flex;
`

const SquareWrapper = styled.button`
    display: flex;
    background-color: ${props => props.isDark ? "black" : "white"};
    border-radius: 15px;
    padding: 3rem 1.5rem;
    flex: 1;
    margin: 2rem 1rem;
    box-shadow: 0px 67.11px 109.06px rgba(0, 0, 0, 0.05);
    border: ${props => props.isDark ? '3px solid rgba(216, 216, 216, 0.4)' : '1px solid rgba(216, 216, 216, 0.4)'};

    transition: transform 1s;
    
    :hover{
        transform: scale(1.05);
        cursor: pointer;
        color: white;
        background-color: ${theme.colors.purple};
    }
`

const SkipLink = styled.a`
  margin-right: 1rem;
  opacity: 0;

  &:focus {
    opacity: 1;
  }
`

const AssistiveTech = ({setSection, isDark}) => {
    const [itemSelected, setItemSelected] = useState(null);

    return (
        <PageWrapper>
            <Popup item={itemSelected} setItemSelected={setItemSelected} isDark={isDark}/>
            <MainTitle id="main">What types of <PurpleText isDark={isDark}>assistive devices</PurpleText> are available for <PurpleText isDark={isDark}>Deaf/Hard-of-Hearing</PurpleText> People?</MainTitle>
            <GreyCallout isDark={isDark}><BoldText role="heading">What is an assistive device?</BoldText> The terms assistive device or assistive technology can refer to any device that helps a person with hearing loss or a voice, speech, or language disorder to communicate. These terms often refer to devices that help a person to hear and understand what is being said more clearly or to express thoughts more easily.</GreyCallout>
            <Row1>
                {AssistiveTechData.map((item) => (
                    <SquareWrapper onClick={() =>  setItemSelected(item)} isDark={isDark}>
                        <SquareCard>{item.title}</SquareCard>
                    </SquareWrapper>
                ))}
            </Row1>
            <SkipLink href="#ALD">Skip to Assistive listening devices</SkipLink>
            <SkipLink href="#AAC">Skip to Augmentative and alternative communication devices</SkipLink>
            <SkipLink href="#AD">Skip to Alerting Devices</SkipLink>
            <ALDSection setItemSelected={setItemSelected} isDark={isDark}/>
            <AACSection setItemSelected={setItemSelected} isDark={isDark}/>
            <ADSection setItemSelected={setItemSelected}/>
            <NextButton text="Learn ASL" link="/asl" setSection={setSection} isDark={isDark}/>
        </PageWrapper>
    )    
}

export default AssistiveTech;