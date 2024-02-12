import React from "react";
import styled from "styled-components";
import { categoryItems } from "../data";
import CategoryItem from "./CatogoryItem";
import { mobile } from "../responsive";

const Wrapper = styled.div`
  background-color: #fcf5f5;
  margin-top: 0px;
  padding: 0px 10px;
  padding-top: 100px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 10px;
  padding: 30px 5px;

  ${mobile({ flexDirection: "column" })}
`;

const Heading = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  text-align: center;
  letter-spacing: 3px;
  font-size: 40px;
  margin-bottom: 30px;
  ${mobile({ fontSize: "30px", marginBottom: "20px" })}
`;
const Desc = styled.div`
  text-align: center;
  letter-spacing: 3px;
  font-size: 30px;
  margin-bottom: 30px;
  ${mobile({ fontSize: "10px", marginBottom: "20px" })}
`;

const Categories = () => {
  return (
    <>
      <Wrapper>
        <Heading>
          <Title>
            <h3>
              <span style={{ color: "#ae3047" }}>•</span>
              Categories
              <span style={{ color: "#ae3047" }}>•</span>
            </h3>
          </Title>
          <Desc>
            <h6>Shop from our varieties of category items in vogue</h6>
          </Desc>
        </Heading>
        <Container>
          {categoryItems.map((item) => (
            <CategoryItem item={item} key={item.id} />
          ))}
        </Container>
      </Wrapper>
    </>
  );
};

export default Categories;
