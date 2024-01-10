import styled from 'styled-components'
import NavBar from '../components/NavBar'
import Advert from '../components/Advert'
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Products from '../components/Products';

const Title = styled.h1`
    margin: 10px;
`
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;
const Left = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`;
const FilterTitle = styled.h4`
    margin-right: 10px;
`;
const FilterItems = styled.select`
    margin-right: 10px;
    padding: 10px;
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