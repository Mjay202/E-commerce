import React from 'react'
import NavBar from '../components/NavBar'
import Advert from '../components/Advert'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, ArrowLeftOutlined, ArrowRightOutlined, Remove, ShoppingCartOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from "../responsive";

const Wrapper = styled.div`
    padding: 20px;

`
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  ${mobile({ fontWeight: "200", fontSize: '30px' })}
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ padding: "3px" })}
`;

const TopButton = styled.button`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  margin: 20px;
  cursor: pointer;
  background-color: ${(props) => props.type === "filled" && "black"};
  color: ${(props) => props.type === "filled" && "white"};
  border-radius: 2px;
  transition: all 0.5s ease;

  &:hover {
    background-color: teal;
    color: white;
    border: none;
  }
`;
const TopTexts = styled.div`
    display: flex;

`
const TopText = styled.div`
    margin-left: 10px;
    text-decoration: underline;
    cursor: pointer;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    margin: 20px 0px;

`
const ProductDetails= styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    object-fit: cover;
    width: 20vw;
    height: 25vh;
`
const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 30px; 
    
    
`
const ProductName = styled.div`
    width: 100%;
`
const ProductId = styled.div``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.color};
    border-radius: 50%;
`
const ProductSize = styled.div``


const PriceDetails = styled.div`
    flex: 1;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const AmountContainer = styled.div`
    display: flex;
    margin-bottom: 30px;
    align-items: center;
`;
const Amount = styled.div`
    font-size: 25px;
    margin: 0px 10px;
`;
const Price = styled.div`
    font-size: 25px;
    font-weight: 500;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid black ;
    padding: 10px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 500;
    text-align: center;
`
const SummaryItem = styled.div`
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;
   
`
const SummaryItemText = styled.span`
  font-size: ${(props) => props.type === "total" && "24px"};
  font-weight: ${(props) => props.type === "total" && "500"};
`;
const SummaryItemPrice = styled.span`
  font-size: ${(props) => props.type === "total" && "24px"};
  font-weight: ${(props) => props.type === "total" ? "500" : "600"};
`;
const Button = styled.button`
  padding: 10px;
  width: 100%;
  cursor: pointer;
  transition: all 0.5s ease;
  padding: 15px;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const Hr = styled.hr`
  border: none;
  background-color: #efe6e6;
  height: 1px;
 
`;

const Cart = () => {
  return (
    <>
      <NavBar />
      <Advert />
      <Wrapper>
        <Title>
          YOUR CART
          <ShoppingCartOutlined style={{ marginLeft: 10 }} />
        </Title>
        <Top>
          <TopButton>
            {" "}
            <ArrowLeftOutlined /> CONTINUE SHOPPING
          </TopButton>
          <TopTexts>
            <TopText>Shopping Items (2)</TopText>
            <TopText>My Wishlist (2)</TopText>
          </TopTexts>
          <TopButton type="filled">
            CHECK OUT NOW <ArrowRightOutlined />{" "}
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src="https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <Details>
                  <ProductName>
                    <b>Product Name:</b> Denim Shorts
                  </ProductName>
                  <ProductId>
                    <b>Product Id:</b> D2344568
                  </ProductId>
                  <ProductColor color="skyblue" />
                  <ProductSize>
                    <b>Product Size: </b> M
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <AmountContainer>
                  <Add style={{ cursor: "pointer" }} />
                  <Amount>2</Amount>
                  <Remove style={{ cursor: "pointer" }} />
                </AmountContainer>
                <Price> $ 150</Price>
              </PriceDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src="https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <Details>
                  <ProductName>
                    <b>Product Name:</b> White sneakers
                  </ProductName>
                  <ProductId>
                    <b>Product Id:</b> W23445678
                  </ProductId>
                  <ProductColor color="skyblue" />
                  <ProductSize>
                    <b>Product Size: </b> L
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <AmountContainer>
                  <Add style={{ cursor: "pointer" }} />
                  <Amount>1</Amount>
                  <Remove style={{ cursor: "pointer" }} />
                </AmountContainer>
                <Price> $ 220</Price>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText> Subtotal:</SummaryItemText>
              <SummaryItemPrice>$ 320</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText> Estimated Shipping:</SummaryItemText>
              <SummaryItemPrice>$ 40</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText> Discount:</SummaryItemText>
              <SummaryItemPrice>$ -20.5</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText type="total"> Total:</SummaryItemText>
              <SummaryItemPrice type="total"> $ 320</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECK OUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Newsletter />
      <Footer />
    </>
  );
}

export default Cart