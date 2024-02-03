import React, { useEffect, useState } from "react";
import { popularProduct } from "../data";
import styled from "styled-components";
import Product from "./Product";
import { mobile } from "../responsive";
import axios from "axios";

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
  ${mobile({ width: "100%", justifyContent: "center" })}
`;
const Heading = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  text-align: center;
  letter-spacing: 3px;
  font-size: 30px;
  color: #570716;
  margin-bottom: 30px;
  ${mobile({ fontSize: "30px", marginBottom: "20px" })}
`;
const Desc = styled.h2`
  text-align: center;
  letter-spacing: 2px;
  /* font-size: 30px; */
  color: #570716;
  margin-bottom: 30px;
  ${mobile({ fontSize: "10px", marginBottom: "20px" })}
`;

const Products = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5200/api/products/");
        console.log(res.data);
        setproducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getProducts();
  }, []);

  return (
    <>
      <Wrapper>
        <Heading>
          <Title>
            <h3>•Top Products•</h3>
          </Title>

          <Desc>
            <h6>
              Explore our top-rated products for a curated selection of customer
              favorites
            </h6>
          </Desc>
        </Heading>
        <Container>
          {products.map((item) => (
            <Product item={item} key={item.id} />
          ))}
        </Container>
      </Wrapper>
    </>
  );
};

export default Products;
