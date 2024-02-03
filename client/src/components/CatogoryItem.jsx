import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  flex: 1;
  min-width: 30%;
  border-radius: 3px;

  position: relative;
  background-color: #f5fbfd;
  height: 60vh;
  margin-top: 20px;
  opacity: 0.8;
  margin: 5px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    opacity: 1;
    scale: 1.05;
  }
  ${mobile({ width: "100%", height: "20vh", margin: "10px 0px" })}
`;
const Img = styled.img`
  height: 100%;
  min-width: 100%;
  object-fit: cover;

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
  color: #570716;
`;

const Title = styled.h2``;

const Button = styled.button`
  border: none;
  font-weight: 600;
  margin-top: 10px;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    font-weight: 700;
    color: #ae3047;
  }
`;

const CatogoryItem = ({ item }) => {
  return (
    <Container>
      <Img src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CatogoryItem;
