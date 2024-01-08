import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data';
import { useState } from 'react';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    background-color: smokewhite;
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;

`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX( ${props => props.slideIndex * -100}vw);
    transition: all 1.5s ease
    `;

const Slide = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg }
`;
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;
const InfoContainer = styled.div`
    flex: 1;
`;

const Title = styled.h1`
    font-size: 70px;
`;
const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 5px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Arrow = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 50px;
    height: 50px;
    position: absolute;
    border-radius: 50%;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.8;
    z-index: 2;

`;

const Slider = () => {
    const [slideIndex, setslideIndex] = useState (0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setslideIndex(slideIndex > -1 ? slideIndex - 1 : 1)
            
        } else {
            setslideIndex(slideIndex < 1 ? slideIndex + 1 : -1)
        }
    };
  return (
    <Container>
        <Arrow direction="left" onClick={()=> handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex ={slideIndex}>
            {sliderItems.map((item)=> (
                
                <Slide bg={item.bg}>
                <ImgContainer>
                <Image src={item.img} alt="first slide"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>
                        {item.title}
                    </Title>
                    <Description>
                        {item.desc}
                        <br />
                        GET FLAT 30% OFF FOR NEW ARRIVALS.
                        
                    </Description>
                    <Button>
                        SHOP NOW
                    </Button>
                </InfoContainer>
            </Slide > 
            
            
            
            
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=> handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    
    </Container>

  )
}

export default Slider