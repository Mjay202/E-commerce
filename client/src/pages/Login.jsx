import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(211, 20, 20, 0.2)),
    url("https://img.freepik.com/free-photo/beautiful-three-young-women-with-gift-bags-walk-city_1157-48967.jpg?w=826&t=st=1706906837~exp=1706907437~hmac=2814aca72e82fc4ec90afe4cd8b4bcb202b793af977e0cd6803ae5931d95a6b1")
      center;

  background-size: contain;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ width: "auto", heigth: "auto" })}
`;

const Wrapper = styled.div`
  width: 30%;
  background-color: white;
  opacity: 0.9;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  ${mobile({ width: "70%" })}
`;
const Title = styled.h3`
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
`;
const Input = styled.input`
  padding: 7px;
  flex: 1;
  margin: 7px;
  ${mobile({ border: "0.5px solid teal" })}
`;
const Create = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-size: 12px;
  margin-top: 10px;
  font-weight: 500;
  text-decoration: underline;

  &:hover {
    color: teal;
    font-weight: 400;
  }
`;
const Button = styled.button`
  min-width: 30%;
  margin-top: 20px;
  padding: 10px;
  cursor: pointer;
  font-size: 15px;
  transition: all 0.5s ease;
  border: none;
  border-radius: 2px;

  &:hover {
    background-color: teal;
    color: white;
  }
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Log in to your Account</Title>
        <Form>
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" />
          <Create>
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
                fontSize: "inherit",
              }}
            >
              You do not remember your password?
            </Link>
          </Create>

          <Create>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/register"
            >
              Don't have an account? Create a new Account.
            </Link>
          </Create>
          <Button>Login</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
