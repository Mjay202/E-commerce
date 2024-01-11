import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(211, 20, 20, 0.2)),
    url("https://images.unsplash.com/photo-1546213290-e1b492ab3eee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
      center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 30%;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`
const Title = styled.h2`
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
  
`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
`
const Input = styled.input`
  padding: 10px;
  flex: 1;
  margin: 10px;

`
const Link = styled.a`
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
`
const Button = styled.button`
  min-width: 20%;
  margin-top: 20px;
  padding: 20px;
  cursor: pointer;
  font-size: 15px;
  transition: all 0.5s ease;
  border: none;
  border-radius: 2px;

  &:hover {
    background-color: teal;
    color: white;

  }
 
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Log in to your Account</Title>
        <Form>
        
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" />
          <Link>You do not remember your password?</Link>
          <Link>Don't have an account? Create a new Account.</Link>
          <Button>Login</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login