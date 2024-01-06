import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: coral;
    width: 100%;
    height: 100vh;
    position: relative;

`;

const Wrapper = styled.div`
    height: 100%;
`;

const Slide = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
`;
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Img = styled.img`
    height: 80%;
    width: 100px;
    background-color: black;
`;
const InfoContainer = styled.div`
    flex: 1;
`;

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


`;

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper>
            <Slide>
                <ImgContainer>
                    <Img src="https://unsplash.com/photos/smiling-woman-in-black-and-white-print-t-shirt-VW5VjskNXZ8"/>
                </ImgContainer>
                <InfoContainer>

                </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right">
            <ArrowRightOutlined/>
        </Arrow>
    
    </Container>

  )
}

export default Slider