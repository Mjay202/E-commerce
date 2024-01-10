import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: 
  linear-gradient(
    rgba(255,255,255,0.3),
    rgba(211, 20, 20, 0.2)
    ),
  url("https://shorturl.at/jrQRU") center;
`;

const Wrapper = styled.div``
const Form = styled.form``
const Title = styled.h2``
const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Form>
                <Title>Register</Title>

            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register