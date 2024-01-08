import React from 'react'
import styled from 'styled-components'
import { categoryItems } from '../data';
import CategoryItem from "./CatogoryItem";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 20px;
`;


const Categories = () => {
  return (
    <Container>
      {categoryItems.map(item=>(
        <CategoryItem item ={item}/>
      ))}
    </Container>
  )
}

export default Categories