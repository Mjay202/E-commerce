import React, { useContext, useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

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
const ErrorMsg = styled.div`
  color: red;
  font-size: 10px;
  text-align: center;
  margin: 5px;
`;
const Create = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-size: 9px;
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
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [errMsg, seterrMsg] = useState("");
  const [userDetails, setuserDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    seterrMsg("");
    setuserDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(userDetails)
      navigate("/");
      console.log(res);
    } catch (err) {
      seterrMsg(err.response.data);
      console.log(err);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Log in to your Account</Title>
        <Form>
          <Input
            placeholder="Email"
            type="email"
            onChange={handleChange}
            name="email"
          />
          <Input
            placeholder="Password"
            onChange={handleChange}
            name="password"
          />
          {errMsg && <ErrorMsg>{errMsg}</ErrorMsg>}
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
          <Button onClick={handleSubmit}>Login</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
