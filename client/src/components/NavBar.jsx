import { Avatar, Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'
import { Link } from 'react-router-dom';
import logo1 from "../images/logo.png"


const Container = styled.div`
  height: 60px;
  position: fixed;
  top: 0;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  background-color: white;
  z-index: 3;
  ${mobile({ height: "20px" })}
`;


const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  ${mobile({ height: "20px", padding: ' 10px ' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ flex: "2" })}
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  margin-left: 25px;
  display: flex;
  align-items: center;
  padding: 5px;
  border: 0.5px solid lightgray;
  height: 20px;
  justify-content: space-between;

  ${mobile({ marginLeft: "5px", height: "10px", padding: '3px', width: '100%'})}
`;

const Input = styled.input`
  border: none;
  padding: 3px;
  height: 100%;
  flex: 5;
  margin-left: 0;
  ${mobile({ width: "50px" })}
`;

const Icon = styled.div`
    flex: 5;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({  flex: "2" })}
`;

const Logo = styled.div`
 
  ${mobile({ fontSize: "20px", marginLeft: '5px' })}
`;


const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ justifyContent: "center", flex: "3" })}
`;


const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: '5px' })}
`;

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Icon>
              <Search style={{ color: "gray", fontSize: 16 }} />
            </Icon>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>{logo1} </Logo>
        </Center>
        <Right>
            <Avatar style={{backgroundColor: 'orange'}}>N</Avatar>
          <MenuItem>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={"/register"}
            >
              REGISTER
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={"/login"}
            >
              LOGIN
            </Link>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default NavBar