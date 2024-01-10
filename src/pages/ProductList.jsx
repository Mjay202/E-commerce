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
    
`;
const FilterTitle = styled.h4`
    margin-right: 10px;
`;
const FilterItems = styled.select`
    
`;
const Options = styled.option`
    
`;

const Right = styled.div`
    
`;

const ProductList = () => {
  return (
    <>
    <NavBar/>
    <Advert/>
    <Title>Mens' Fashion</Title>
    <Container>
        <Left>
            <FilterTitle>
                Size:
            </FilterTitle>
            <FilterItems>
                <Options>XXL</Options>
                <Options>XL</Options>
                <Options>L</Options>
                <Options>M</Options>
                <Options>S</Options>
                <Options>XS</Options>
            </FilterItems>
        </Left>
        <Right>Right</Right>
    </Container>
    <Products/>
    <Newsletter/>
    <Footer/>

    </>
    
  )
}

export default ProductList