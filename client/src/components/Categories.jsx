import React from 'react'
import styled from 'styled-components'
import { categoryItems } from '../data';
import CategoryItem from "./CatogoryItem";
import { mobile } from "../responsive";


const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 20px;
  ${mobile({ flexDirection: "column" })}

`;


const Categories = () => {
  return (
    <Container>
      {categoryItems.map(item=>(
        <CategoryItem item ={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Categories