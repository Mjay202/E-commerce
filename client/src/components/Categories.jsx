import React from 'react'
import styled from 'styled-components'
import { categoryItems } from '../data';
import CategoryItem from "./CatogoryItem";
import { mobile } from "../responsive";

const Wrapper = styled.div`
  background-color: #fcf5f5;
  margin-top: 0px;
  padding: 50px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  
  flex-wrap: wrap;
  padding: 30px 0px;
  
  ${mobile({ flexDirection: "column" })}
`;

const Title = styled.div`
  
  text-align: center;
  letter-spacing: 3px;
  font-size: 30px;
  margin-bottom: 30px;
  ${mobile({ fontSize: "30px", marginBottom: "20px" })}
`;
const Desc = styled.div`
 
  text-align: center;
  letter-spacing: 3px;
  font-size: 20px;
  margin-bottom: 30px;
  ${mobile({ fontSize: "10px", marginBottom: "20px" })}
`;


const Categories = () => {
  return (
    <>
      <Wrapper>
        <Title>
          <h3>•Categories•</h3>
        </Title>
        <Desc>
          <h6>Shop from our varieties of category items in vogue</h6>
        </Desc>
        <Container>
          {categoryItems.map((item) => (
            <CategoryItem item={item} key={item.id} />
          ))}
        </Container>
      </Wrapper>
    </>
  );
}

export default Categories