import React from 'react'
import styled from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox';
import { useState } from 'react';




const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(211, 20, 20, 0.2)),
    url("https://images.unsplash.com/photo-1561052967-61fc91e48d79?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
      center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 40%;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
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
`
const Input = styled.input`
  padding: 10px;
  flex: 1;
  margin: 10px;

`
const Agreement = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
 
`
const Button = styled.button`
  min-width: 30%;
  margin-top: 10px;
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

const Register = () => {
  const [checked, setChecked] = useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Container>
        <Wrapper>
            <Title>Create a new Account</Title>
            <Form>
              <Input placeholder="First Name"/>
              <Input placeholder="Last Name"/>
              <Input placeholder="Phone Number" type="number"/>
              <Input placeholder="Email" type="email"/>
              <Input placeholder="Password"/>
              <Agreement>
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  color="primary"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <p>By clicking this, you agree to all our terms and conditions.</p>
              </Agreement>
              <Button>Create Account</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register