import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  display: flex;
  min-width: 280px;
  height: 350px;
  justify-content: center;
  align-items: center;
  margin: 5px;
  background-color: transparent;
  position: relative;
  ${mobile({ margin: "10px" })}
`;
const Circle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 3;
  transition: all 0.5s ease;
  cursor: pointer;
  background-color: rgba(0,0,0, 0.2);

  &:hover {
    opacity: 1;
  }
`
const Icon = styled.div`
  background-color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 10px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    background-color: #ae3047;
    color: white;
  }
`;

const Product = ({item}) => {
  return (

    <Container>
      <Circle>
        <Image src={item.img}/>
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <SearchOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Circle>
    </Container>
  );
}

export default Product