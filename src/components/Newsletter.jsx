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
    margin-bottom: 30px;
`;

const Desc = styled.div`
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 30px;
`;

const InputContainer  = styled.div`
    width: 40%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid gray;
`;
const Input = styled.input`
    border: none;
    padding-left: 20px;
    flex: 8;
`;
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white

`;

const Newsletter = () => {
  return (
    <Container>
        <Title>
            Newsletter
        </Title>
        <Desc>
            Get news update on your favourite products!
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