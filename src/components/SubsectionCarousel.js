import styled from "styled-components";
import theme from "../theme";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PhotoSquare from "./PhotoSquare";

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

const SubsectionCarousel = ({title, items}) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <CarouselWrapper>
            <Carousel responsive={responsive} infinite showDots keyBoardControl>
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