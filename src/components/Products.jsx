import React from 'react'
import { popularProduct } from '../data'
import styled from 'styled-components'
import Product from './Product'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

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