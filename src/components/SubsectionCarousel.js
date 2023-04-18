import styled from "styled-components";
import theme from "../theme";

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

            </CarouselWrapper>
        </Wrapper>
    )
}

export default SubsectionCarousel;