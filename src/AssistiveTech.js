import styled from "styled-components";
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

const SquareWrapper = styled.div`
    display: flex;
    background-color: white;
    border-radius: 15px;
    padding: 3rem 1.5rem;
    flex: 1;
    margin: 2rem 1rem;
    box-shadow: 0px 67.11px 109.06px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(216, 216, 216, 0.4);

    transition: transform 1s;
    
    :hover{
        transform: scale(1.05);
        cursor: pointer;
        color: white;
        background-color: ${theme.colors.purple};
    }
`

const AssistiveTech = ({setSection}) => {
    const [itemSelected, setItemSelected] = useState(null);

    return (
        <PageWrapper>
            <Popup item={itemSelected} setItemSelected={setItemSelected}/>
            <MainTitle>What types of <PurpleText>assistive devices</PurpleText> are available for <PurpleText>Deaf/Hard-of-Hearing</PurpleText> People?</MainTitle>
            <GreyCallout><BoldText>What is an assistive device?</BoldText> The terms assistive device or assistive technology can refer to any device that helps a person with hearing loss or a voice, speech, or language disorder to communicate. These terms often refer to devices that help a person to hear and understand what is being said more clearly or to express thoughts more easily.</GreyCallout>
            <Row1>
                {AssistiveTechData.map((item) => (
                    <SquareWrapper onClick={() =>  setItemSelected(item)}>
                        <SquareCard>{item.title}</SquareCard>
                    </SquareWrapper>
                ))}
            </Row1>
            <ALDSection setItemSelected={setItemSelected}/>
            <AACSection setItemSelected={setItemSelected}/>
            <ADSection setItemSelected={setItemSelected}/>
            <NextButton text="Learn ASL" link="/asl" setSection={setSection}/>
        </PageWrapper>
    )    
}

export default AssistiveTech;