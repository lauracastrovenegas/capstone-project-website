import styled from "styled-components"
import theme from "../theme"

const PhotoSquare = ({imgLink, imgAlt, title, isStatic, clickable}) => {
    return (
        <Wrapper isStatic={isStatic} isClickable={clickable}>
                <Image>
                    <img className="container" src={imgLink} alt={imgAlt}/>
                    <Content className='text'>
                        <Title>{title}</Title>
                    </Content>
                </Image>
                {isStatic ? <Title isStatic>{title}</Title> : null}
        </Wrapper>
    )
}

export default PhotoSquare;

const Wrapper = styled.div`
    transition: ${props => props.isStatic ? 'none':'transform 0.7s'};
    margin: 2rem 1rem;
    border-radius: 15px;
    height: 20vw;

    font-size: ${props => props.isStatic ? '1rem': '1.5rem'};

    .text {
        display: none;
    }

    :hover{
        cursor: ${props => props.isClickable ? 'pointer': 'mouse'};
        .container {
            filter: ${props => props.isStatic ? 'none': 'brightness(50%)'};
        }

        .text {
            display: ${props => props.isStatic ? 'none': 'flex'};
            filter: ${props => props.isStatic ? 'none': 'brightness(100%)'};
        }
    }
`;

const Image = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto 0 auto 0;
    position: relative;

    width: 100%;   
    height: 100%; 

        img{
            border-radius: 15px;
            width: 100%;   
            height: 100%; 
        }
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 1rem;
    margin: 0 auto;
    position: absolute;
    color: white;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    z-index: 5;

    @media only screen and (max-width: ${theme.sizes.mobile}){
        width: 15rem;
    }
`;

const Title = styled.div`
    font-weight: 500;
    margin-bottom: 1rem;
    text-align: center;

    margin-top: ${props => props.isStatic ? '1rem': '0rem'};

    @media only screen and (max-width: ${theme.sizes.tablet}){
        font-size: 1.5rem;
    }
`;
