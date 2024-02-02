import { Facebook, Home, Instagram, MailOutline, Phone, Pinterest, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";


const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 30px ;
  height: 50vh;
  flex-wrap: wrap;
  ${mobile({ height: "auto", padding: "3px",  flexDirection: 'column', width: '90vw' })}
`;

const Left = styled.div`
  flex: 1;
  line-height: 25px;
  ${mobile({ width: "100%", padding: '0px'})}
`;

const Logo = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "20px", margin: '15px' })}
`;

const Desc = styled.p`
  font-weight: 400;
  margin-bottom: 20px;
  ${mobile({ fontSize: "12px", fontWeight: '200', margin: "15px" })}
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  ${mobile({ pad: "10px", margin: "15px" })}
`;

const SocialIcon = styled.div`

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }

  ${mobile({ fontSize: "10px", margin: "10px", width: '25px', height: '25px'})}
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding-left: 20px;
  /* padding: 20px; */
  ${mobile({ width: "100%", padding: '5px', margin:'2px'})}
`;
const Heading = styled.h3`
  margin-bottom: 20px;
  
  ${mobile({ marginBottom: "10px", fontSize: '15px' })}
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
  justify-content: flex-start;
  align-items: flex-start;
  ${mobile({ width: "100%", padding: "10px" })}
`;
const ListItems = styled.li`
  width: 50%;
  margin-bottom: 12px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  font-size: 15px;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.02);
    color: teal;
  }
  ${mobile({
    width: "20%",
    marginBottom: "2px",
    padding: "10px",
    fontSize: "10px",
  })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  /* padding: 20px; */
  ${mobile({ width: "100%" , padding : '0px', margin: '30px'})}
`;

const ContactHeading = styled.h3`
  margin-bottom: 30px;
  ${mobile({ marginBottom: '15px' })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  font-size: 15px;
  display: flex;
  align-items: center;
  color: gray;
  font-weight: 500;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    color: teal;
    font-weight: 400;
    transform: scale(1.02);
  }

  ${mobile({ width: "100%", fontSize: "12px", marginBottom: "2px" })}
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>JAYXIN.</Logo>
        <Desc>
          We are dedicated to redefining fashion with a curated selection of
          trendsetting styles and unmatched quality, all at unbeatable prices.
          <br /> Our commitment goes beyond products. <br /> We prioritize
          exceptional customer service, making fashion accessible and enjoyable
          for everyone, every time.
        </Desc>
        <Socials>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </Socials>
      </Left>

      <Center>
        <Heading>Useful Links</Heading>
        <List>
          <ListItems>Home </ListItems>
          <ListItems>Shop</ListItems>
          <ListItems>About Us</ListItems>
          <ListItems>Contact Us</ListItems>
          <ListItems>FAQ</ListItems>
          <ListItems>Terms of Service</ListItems>
          <ListItems> Privacy Policy</ListItems>
          <ListItems>Products</ListItems>
          <ListItems>Customer Support </ListItems>
          <ListItems>Returns & Exchanges</ListItems>
          <ListItems>Shipping Information</ListItems>
          <ListItems>Track Your Order</ListItems>
        </List>
      </Center>

      <Right>
        <ContactHeading>Contact Us</ContactHeading>
        <ContactItem>
          <Home style={{marginRight:5}}/>
          Jayxin Fashion Store, 1234 Fashion Avenue, Cityville
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:5}}/>
          (+1) 555-123-4567
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:5}}/>
          info@jayxinfashion.com
        </ContactItem>
      </Right>
    </Container>
  );
}

export default Footer