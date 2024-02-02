import React from 'react'
import { popularProduct } from '../data'
import styled from 'styled-components'
import Product from './Product'
import { mobile } from "../responsive";

const Wrapper = styled.div`
  background-color: white;
  margin-top: 0px;
  padding: 0px 10px;
  padding-top: 100px;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  ${mobile({ width: "100%", justifyContent : 'center' })}
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
  letter-spacing: 4px;
  font-size: 20px;
  margin-bottom: 30px;
  ${mobile({ fontSize: "10px", marginBottom: "20px" })}
`;

const Products = () => {
  return (
    <>
      <Wrapper>
        <Title>
          <h3>•Products•</h3>
        </Title>

        <Desc>
          <h6>
            Explore our top-rated products for a curated selection of customer
            favorites
          </h6>
        </Desc>
        <Container>
          {popularProduct.map((item) => (
            <Product item={item} key={item.id} />
          ))}
        </Container>
      </Wrapper>
    </>
  );
}

export default Products