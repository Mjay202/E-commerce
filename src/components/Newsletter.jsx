import { Send } from '@material-ui/icons'
import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
  height: 70vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ height: "40vh", padding: "10px" })}
`;

const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 30px;
  ${mobile({ fontSize: "30px", marginBottom: "20px" })}
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 30px;
  ${mobile({ fontSize: "15px", marginBottom: "20px" })}
`;

const InputContainer = styled.div`
  width: 40%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  ${mobile({ height: "30px", marginBottom: "20px", width: "80%" })}
`;
const Input = styled.input`
  border: none;
  padding-left: 20px;
  flex: 8;
  ${mobile({ flex: "7", marginLeft: "0px" })}
`;
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;

    &:hover{
        transform: scale(1.1);
    }
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