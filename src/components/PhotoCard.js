import styled from "styled-components";

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    background-color: white;
    border-radius: 15px;

    box-shadow: 0px 67.11px 109.06px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(216, 216, 216, 0.4);

    transition: transform 0.7s;
    
    :hover{
        transform: scale(1.05);
        cursor: pointer;
    }
`

const Image = styled.div`

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Text = styled.h3`
    text-align: center;
    font-weight: 600;
    font-size: 1.5rem;
    height: fit-content;
    margin: auto 0rem;
    padding: 2rem 0rem 1rem 0rem;
`

const PhotoCard = ({imgLink, imgAlt, text}) => {
    return (
        <CardWrapper>
            <Image>
                <img src={imgLink} alt={imgAlt}/>
            </Image>
            <Text>
                {text}
            </Text>
        </CardWrapper>
    )
}

export default PhotoCard;