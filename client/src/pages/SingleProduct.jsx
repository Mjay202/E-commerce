import styled from "styled-components";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import { Add, Remove } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 80vh;
  width: 100%;
  margin-right: 20px;
`;
const Image = styled.img`
  height: 100%;
  width: 80%;
  object-fit: cover;
  background-color: #d68080;
  transform: all 0.5s ease;

  &:hover {
    transform: scale(1.1, 1.1);
  }
`;
const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: flex-start; */
  padding: 0px 50px;
`;
const Title = styled.h1`
  margin-bottom: 30px;
  font-weight: 300;
`;
const Desc = styled.p`
  margin-bottom: 30px;
`;
const Price = styled.p`
  font-size: 40px;
  font-weight: 400;
`;
const FilterContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin-top: 20px;
`;
const FilterColor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ColorTitle = styled.h4`
  font-weight: 300;
  font-size: 20px;
  margin-right: 10px;
`;
const ColorOption = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
  cursor: pointer;
  background-color: ${(props) => props.color};
`;
const FilterSize = styled.div`
  display: flex;
`;
const SizeTitle = styled.h4`
  font-weight: 300;
  font-size: 20px;
  margin-right: 10px;
`;
const SizeOptions = styled.select`
  padding: 5px;
`;
const SizeOption = styled.option``;

const AddContainer = styled.span`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  width: 50%;
`;
const AmountContainer = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
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
`;
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
`;

const SingleProduct = () => {
  const [product, setproduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const decreaseQuantity = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const location = useLocation();
  const prodId = location.pathname.split("/")[2];

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5200/api/products/${prodId}`
        );
        console.log(res.data);
        setproduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getProduct();
  }, []);
  return (
    <>
      <NavBar />
      <Advert />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>{product.price}</Price>
          <FilterContainer>
            <FilterColor>
              <ColorTitle>Color:</ColorTitle>
              <ColorOption color={product.color} />
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
              <Remove
                onClick={decreaseQuantity}
                style={{ cursor: "pointer" }}
              />

              <Amount>{quantity}</Amount>
              <Add onClick={increaseQuantity} style={{ cursor: "pointer" }} />
            </AmountContainer>
            <Button>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </>
  );
};

export default SingleProduct;
