import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  background-color: #98db2d;
  height: 70vh;
  margin: 5px;

`;
const Img = styled.img``;

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
  color: white;
`;

const Button = styled.button`
  border: none;
  font-weight: 600;
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