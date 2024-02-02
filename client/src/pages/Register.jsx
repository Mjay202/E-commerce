import React from "react";
import styled from "styled-components";
import Checkbox from "@material-ui/core/Checkbox";
import { useState } from "react";
import { mobile } from "../responsive";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.1), rgba(211, 20, 20, 0.5)),
    url("https://img.freepik.com/free-photo/interior-clothing-store-with-stylish-merchandise-racks-fashionable-brand-design-casual-wear-modern-boutique-empty-fashion-showroom-shopping-centre-with-elegant-merchandise_482257-65537.jpg?w=996&t=st=1706908177~exp=1706908777~hmac=c9db16cae94249d27806375fd84c4ba353b0a4fa309331b5750bcfa776ed23af");

  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 30%;
  background-color: white;
  opacity: 0.9;
  border-radius: 5px;
  padding: 20px;
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
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;
const Input = styled.input`
  padding: 7px;
  flex: 1;
  margin: 5px;
  ${mobile({ border: "0.5px solid teal" })}
`;
const ErrorMsg = styled.div`
  color: red;
  font-size: 10px;
  text-align: center;
  margin: 5px;
`;
const Agreement = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 10px;
  justify-content: flex-start;
  ${mobile({ fontSize: "12px" })}
`;
const Button = styled.button`
  min-width: 30%;
  margin-top: 10px;
  padding: 10px;
  cursor: pointer;
  font-size: 15px;
  transition: all 0.5s ease;
  border: none;
  border-radius: 2px;
  ${mobile({ padding: "15px", margin: "15px" })}

  &:hover {
    background-color: teal;
    color: white;
  }
`;

const Register = () => {
  const navigate = useNavigate()

  const [checked, setChecked] = useState(true);
  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };

  const [errMsg, seterrMsg] = useState("")
  const [newUser, setnewUser] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    seterrMsg("")
    setnewUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post("http://localhost:5200/api/auth/register", newUser);
      navigate("/login")
      console.log(res);
    } catch (err) {
      seterrMsg(err.message)
      console.log(err)
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Create a new Account</Title>
        <Form>
          <Input
            placeholder="First Name"
            onChange={handleChange}
            name="firstname"
          />
          <Input
            placeholder="Last Name"
            onChange={handleChange}
            name="lastname"
          />
          <Input
            placeholder="Phone Number"
            type="number"
            onChange={handleChange}
            name="phone"
          />
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
          <Link
            style={{
              textDecoration: "none",
              color: "inherit",
              fontSize: "10px",
              textAlign: "center",
              marginTop: "5px",
            }}
            to="/login"
          >
            Already have an account?{" "}
            <span style={{ textDecoration: "underline", color: "teal" }}>
              Login here
            </span>
          </Link>
          
          <ErrorMsg>{ errMsg}</ErrorMsg>
          <Agreement>
            <Checkbox
              checked={checked}
              onChange={handleCheck}
              color="primary"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <p>By clicking this, you agree to all our terms and conditions.</p>
          </Agreement>
          <Button onClick={handleSubmit}>Create Account</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
