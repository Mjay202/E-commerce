import { Send } from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div`
    height: 70vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 60px;
    margin-bottom: 20px;
`;

const Desc = styled.div`
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 20px;
`;

const InputContainer  = styled.div`
    width: 80%;
    height: 40px;
`;
const Input = styled.input``;
const Button = styled.button``;

const Newsletter = () => {
  return (
    <Container>
        <Title>
            Newsletter
        </Title>
        <Desc>
            Get news update on your chosen products!
        </Desc>
        <InputContainer>
            <Input placeholder="Your email"/>
            <Button>
              <Send/>  
            </Button>       
        </InputContainer>
    </Container>
  )
}

export default Newsletter