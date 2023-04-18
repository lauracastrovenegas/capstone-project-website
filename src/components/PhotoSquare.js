import styled from "styled-components"

const Wrapper = styled.div`
    margin: 2rem 1rem;
    border-radius: 15px;
    
    img {
        border-radius: 15px;
        width: 100%;
        height: 100%;
    }

    transition: ${props => props.isStatic ? 'none':'transform 0.7s'};
    
    :hover{
        transform: ${props => props.isStatic ? 'none': 'scale(1.025)'};
        cursor: pointer;
    }
`

const PhotoSquare = ({imgLink, imgAlt, isStatic}) => {
    return (
        <Wrapper isStatic={isStatic}>
            <img src={imgLink} alt={imgAlt}/>
        </Wrapper>
    )
}

export default PhotoSquare;
