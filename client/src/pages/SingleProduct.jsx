import styled from "styled-components"
import Advert from "../components/Advert"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Newsletter from "../components/Newsletter"
import { Add, Remove } from "@material-ui/icons"
import { useEffect, useState } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"

const Wrapper = styled.div`
  display: flex;
  padding: 50px;

`
const ImgContainer = styled.div`
  flex: 1;
  height: 80vh ;
  width: 100%;
  margin-right: 20px;
  
`
const Image = styled.img`
  height: 100%;
  width: 80%;
  object-fit: cover;
  background-color: #d68080;
  transform: all 0.5s ease;
  
  &:hover {
    transform: scale(1.1, 1.1)
  }
`
const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: flex-start; */
  padding: 0px 50px;
`
const Title = styled.h1`
  margin-bottom: 30px;
  font-weight: 300;
`
const Desc = styled.p`
  margin-bottom: 30px;
`
const Price = styled.p`
  font-size: 40px;
  font-weight: 400;
`
const FilterContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin-top: 20px;
`
const FilterColor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const ColorTitle = styled.h4`
  font-weight: 300;
  font-size: 20px;
  margin-right: 10px;

`
const ColorOption = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
  cursor: pointer;
  background-color: ${(props) => props.color};
`
const FilterSize = styled.div`
  display: flex;
`
const SizeTitle = styled.h4`
  font-weight: 300;
  font-size: 20px;
  margin-right: 10px;
`;
const SizeOptions = styled.select`
  padding: 5px;
`
const SizeOption = styled.option``

const AddContainer = styled.span`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  width: 50%;
`
const AmountContainer = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  padding: 0px 5px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  margin: 0px 10px;
  border-radius: 20%;
  border: 1px solid teal;
`
const Button = styled.button`
  padding: 10px;
  border-radius: 2px;
  border: 1px solid teal;
  transition: all 0.5 ease;

  &:hover {
    background-color: teal;
    color: white;
    transform: scale(1.1, 1.1);
  }
`


const SingleProduct = () => {
  const [product, setproduct] = useState([]);
  const location = useLocation();
  const prodId = location.pathname.split("/")[2];
  console.log(prodId);

  // useEffect(() => {
  //   const getProduct = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:5200/api/products/");
  //       console.log(res.data);
  //       setproduct(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   getProduct();
  // }, []);
  return (
    <>
      <NavBar />
      <Advert />
      <Wrapper>
        <ImgContainer>
          <Image src="https://img.freepik.com/free-photo/woman-model-demonstrating-winter-cloths_1303-16949.jpg?w=360&t=st=1706837059~exp=1706837659~hmac=c6d300421eec096293b478906008eae13a9aec94a720cfd56828895a7ae3a4d2" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt ad
            debitis, inventore magnam similique in consequatur officia ducimus
            consectetur quia amet aliquid a excepturi repellat. Repellat
            quisquam incidunt doloremque provident.
          </Desc>
          <Price>$150</Price>
          <FilterContainer>
            <FilterColor>
              <ColorTitle>Color:</ColorTitle>
              <ColorOption color="black" />
              <ColorOption color="darkgray" />
              <ColorOption color="gray" />
            </FilterColor>
            <FilterSize>
              <SizeTitle>Size:</SizeTitle>
              <SizeOptions>
                <SizeOption>XL</SizeOption>
                <SizeOption>L</SizeOption>
                <SizeOption>M</SizeOption>
                <SizeOption>S</SizeOption>
                <SizeOption>XS</SizeOption>
              </SizeOptions>
            </FilterSize>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove style={{ cursor: "pointer" }} />
              <Amount>1</Amount>
              <Add style={{ cursor: "pointer" }} />
            </AmountContainer>
            <Button>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </>
  );
}

export default SingleProduct