import React from 'react'
import { popularProduct } from '../data'
import styled from 'styled-components'
import Product from './Product'
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  ${mobile({ width: "100%", justifyContent : 'center' })}
`;

const Products = () => {
  return (
    <Container>
        
        {popularProduct.map(item=>(
            <Product item = {item} key={item.id} />
        ))}

    </Container>
  )
}

export default Products