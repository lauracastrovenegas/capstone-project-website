import styled from "styled-components";
import theme from "./theme";
import YoutubeEmbed from "./components/YoutubeEmbed";
import { ASLVideos, ASLYoutubers, ASLResources } from "./data";

const PageWrapper = styled.div`
    padding-bottom: 4rem;
    padding-top: 1rem;
`

const MainTitle = styled.h1`
    text-transform: capitalize;
    font-size: 4vw;
`

const Subtitle = styled.h2`
    margin-top: 2rem;
    font-size: 1.75rem;
`

const Subtitle2 = styled.h3`
    margin-top: 2rem;
    font-size: 1.2rem;
`

const Subtitle3 = styled.h3`
    margin: auto 1rem auto 1rem;
    font-size: 1.2rem;
    height: fit-content;
`

const Text = styled.p`
    font-size: 1.2rem;
    margin: 0rem auto;
`

const PurpleText = styled.span`
    color: ${props => props.isDark ? theme.colors.lightPurple : theme.colors.purple};
`

const Videos = styled.h2`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 5rem;
`

const Video = styled.h2`
    margin: 1rem 1rem 0rem 1rem;
`

const Row = styled.div`
    display: flex;
    margin: 2rem 0rem;
`

const Image = styled.a`
    height: auto;
    min-height: 12vw;
    border-radius: 15px;
    margin: 1rem;
    text-decoration: none;
    color: white;
    background-color: ${theme.colors.purple};
    text-align: center;
    display: flex;
    flex: 1;

    img {
        border-radius: 15px;
        width: 100%;
        height: 100%;
    }

    :hover {
        cursor: pointer;
    }
`

const LearnASL = ({isDark}) => {
    return (
        <PageWrapper>
        <MainTitle>Learn <PurpleText isDark={isDark}>American Sign Language</PurpleText></MainTitle>
        <Subtitle>Learn your first 10 words/phrases in ASL</Subtitle>
        <Text>One of the easiest ways to learn sign language is through YouTube tutorials. The video hosting site has dozens of teachers who give free lessons on how to sign the alphabet, common phrases, numbers, and more.</Text>
        <Videos>
            {ASLVideos.map((video) => (
            <Video>
                <Subtitle2><PurpleText isDark={isDark}>{video.title}</PurpleText></Subtitle2>
                <YoutubeEmbed videoLink={video.videoLink}/>
            </Video>
        ))}
        </Videos>
        <Subtitle>Youtube ASL Teachers</Subtitle>
        <Row>
            {ASLYoutubers.map((youtuber) => (
                <Image href={youtuber.link}><img src={youtuber.imgLink} alt={`${youtuber.name}'s youtube profile`}/></Image>
            ))}
        </Row>
        <Subtitle>Other Resources</Subtitle>
        <Text>Outside of YouTube, the internet also offers a plethora of resources for those looking to learn sign language, including quizzes, courses, and more.</Text>
        <Row>
            {ASLResources.map((item) => (
                <Image href={item.link}><Subtitle3>{item.title}</Subtitle3></Image>
            ))}
        </Row>
        </PageWrapper>
    )    
}

export default LearnASL;