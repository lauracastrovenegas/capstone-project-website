import styled from "styled-components/macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"
import YoutubeEmbed from "./YoutubeEmbed"

const PopupWrapper = styled.div`
    z-index: 200;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 100vh;
    background-color: rgba(22,22,22,0.5);
    display: flex;
`

const PopupContainer = styled.div`
    width: 70vw;
    margin: auto auto;
    background-color: white;
    border-radius: 30px;
    z-index: 300;
    padding: 2rem;
`

const Close = styled.div`
    display: flex;

    svg {
        margin: 0rem 1rem 1rem auto;

        :hover {
            cursor: pointer;
        }
    }
`

const Title = styled.h2`
    font-weight: 700;
`

const Text = styled.p`
    font-size: 1.2rem;
`

const Video = styled.div`

`

const Popup = ({ item, setItemSelected }) => {

    return (
        item ?
            <PopupWrapper onClick={() => setItemSelected(null)}>
                <PopupContainer onClick={e => e.stopPropagation()}>
                    <Close><FontAwesomeIcon icon={faX} onClick={() => setItemSelected(null)}/></Close>
                    {item.title ? <Title>{item.title}</Title> : null}
                    {item.text ? <Text>{item.text}</Text> : null}
                    {item.videoLink ? <Video><YoutubeEmbed videoLink={item.videoLink} /></Video> : null}
                </PopupContainer>
            </PopupWrapper>
            : null
    )
}

export default Popup;