import styled from "styled-components";
import theme from "../theme";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PhotoSquare from "./PhotoSquare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
    margin: 2rem;
`

const Title = styled.h4`
    color: ${theme.colors.purple};
    text-align: center;
    margin: 1rem;
    font-size: 1.5rem;
`

const CarouselWrapper = styled.div`

`

const ArrowWrapper = styled.div`
    position:absolute; 
    z-index:10;
    right:0;
    color: white;
    font-size: 1.5rem;
    border-radius: 50px;
    background-color: rgba(22,22,22,0.5);
    padding: 0.5rem 1rem;
    margin-right: 2rem;

    :hover {
        cursor: pointer;
        background-color: rgba(22,22,22,0.75);
    }
`

const LeftArrowWrapper = styled.div`
    position:absolute; 
    z-index:10;
    left:0;
    color: white;
    font-size: 1.5rem;
    border-radius: 50px;
    background-color: rgba(22,22,22,0.5);
    padding: 0.5rem 1rem;
    margin-left: 2rem;

    :hover {
        cursor: pointer;
        background-color: rgba(22,22,22,0.75);
    }
`

const CustomRightArrow = ({ onClick, ...rest }) => {
    return <ArrowWrapper onClick={() => onClick()}><FontAwesomeIcon icon={faChevronRight}/></ArrowWrapper>;
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
    return <LeftArrowWrapper onClick={() => onClick()}><FontAwesomeIcon icon={faChevronLeft}/></LeftArrowWrapper>;
};

const SubsectionCarousel = ({title, items}) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <CarouselWrapper>
            <Carousel responsive={responsive} infinite showDots keyBoardControl customRightArrow={<CustomRightArrow />} customLeftArrow={<CustomLeftArrow/>}>
                {items.map((item) => (
                    <PhotoSquare imgLink={item.imgLink} imgAlt={item.imgLink}/>
                ))}
            </Carousel>;
            </CarouselWrapper>
        </Wrapper>
    )
}

export default SubsectionCarousel;



const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
};