import React from 'react'
import styled from 'styled-components';
import { mobile } from "../responsive";


const Container = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  background-color: #f5fbfd;
  height: 70vh;
  margin: 5px;
  ${mobile({ width: "100%", height: '20vh', margin: '10px 0px'})}
`;
const Img = styled.img`
  ${mobile({ width: "100%", height: "20vh" })}
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;


`;

const Title = styled.h1`
  color: black;
`;

const Button = styled.button`
  border: none;
  font-weight: 600;
  margin-top: 10px;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
`;

const CatogoryItem = ({item}) => {
  return (
    <Container>
      <Img src={item.img}/>
      <Info>
        <Title>
          {item.title}
        </Title>
        <Button>
          SHOP NOW
        </Button>
      </Info>
    </Container>
  )
}

export default CatogoryItem