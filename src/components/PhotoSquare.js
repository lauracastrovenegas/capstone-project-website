import styled from "styled-components"

const Wrapper = styled.div`
    margin: 2rem 1rem;
    border-radius: 15px;
    
    img {
        border-radius: 15px;
        width: 100%;
        height: 100%;
    }

    transition: transform 0.7s;
    
    :hover{
        transform: scale(1.025);
        cursor: pointer;
    }
`

const PhotoSquare = ({imgLink, imgAlt}) => {
    return (
        <Wrapper>
            <img src={imgLink} alt={imgAlt}/>
        </Wrapper>
    )
}

export default PhotoSquare;
