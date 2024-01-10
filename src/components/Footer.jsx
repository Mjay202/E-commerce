import { Facebook, Home, Instagram, MailOutline, Phone, Pinterest, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    height: 50vh;
    flex-wrap: wrap;

`;

const Left = styled.div`
    flex: 1;
`;
const Logo = styled.h2`
    font-size: 30px;
    margin-bottom: 20px;
    
`;
const Desc = styled.p`
    font-weight: 400;
    margin-bottom: 20px;
`;
const Socials = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`;
const SocialIcon = styled.div`
  margin-left: 15px;
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
    width: 40px;
    height: 40px;
  }
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;
const Heading = styled.h3`
    margin-bottom: 20px;
`;
const List = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

`;
const ListItems = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px;
`;

const ContactHeading = styled.h3`
    margin-bottom : 30px;
    
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
        color: black;
        font-weight: 400;
    }
`

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