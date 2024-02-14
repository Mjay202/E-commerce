import styled from 'styled-components'
import NavBar from '../components/NavBar'
import Advert from '../components/Advert'
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Products from '../components/Products';
import { mobile } from "../responsive";

const Title = styled.h1`
  margin: 10px;
  ${mobile({ fontSize: "25px", marginBottom: "3px" })}
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  ${mobile({padding: '10px', marginBottom: "3px" })}
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 
`;
const FilterTitle = styled.h4`
  margin-right: 10px;
  ${mobile({ fontSize: "12px", marginRight: "5px" })}
`;
const FilterItems = styled.select`
  margin-right: 10px;
  padding: 10px;
  ${mobile({ padding: "3px", marginRight: "5px" })}
`;
const Option = styled.option`
    margin-bottom: 10px;
`;

const Right = styled.div`
    display: flex;
    align-items: center;
`;

const ProductList = () => {
  return (
    <>
      <NavBar />
      <Advert />
      <Title>Mens' Fashion</Title>
      <Container>
        <Left>
          <FilterTitle>Filter Products:</FilterTitle>
          <FilterItems>
            <Option disabled selected>
              Size
            </Option>
            <Option>XXL</Option>
            <Option>XL</Option>
            <Option>L</Option>
            <Option>M</Option>
            <Option>S</Option>
            <Option>XS</Option>
          </FilterItems>
          <FilterItems>
            <Option disabled selected>
              Colour
            </Option>
            <Option>Red</Option>
            <Option>Yellow</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
          </FilterItems>
        </Left>
        <Right>
          
          <FilterTitle>Sort Products:</FilterTitle>
          <FilterItems>
            <Option selected> Newest </Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </FilterItems>
        </Right>
      </Container>
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
}

export default ProductList