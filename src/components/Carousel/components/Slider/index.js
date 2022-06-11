/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    min-height: 197px;
    background-color: rgba(15,15,15,0.85);
    opacity: 0.5;
    transform: initial;
    &:before {
      font-size: 55px;
      color: ${(props => props.categoryColor)};
    }
    &:hover,
    &focus {
      opacity: 1;
    }
  }
  
  .slick-prev {
    left: 0;
    &:before{
      content: '❮';
    }
  }
  .slick-next {
    right: 0px;
    &:before{
      content: '❯';
    }
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;


const Slider = ({ children, categoryColor }) => (
  <Container
    categoryColor= {categoryColor}>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider; 