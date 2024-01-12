import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: teal;
  font-size: 14px;
  font-weight: 500;
  color: white;
  height: 30px;
  ${mobile({ fontSize: "8px", margin: '20px 0px' })}
`;

const Advert = () => {
  return (
    <Container>
        Number one Best Selling Store in Africa!!! Best Deals, Varieties of Choices, Global brands.. </Container>
  )
}

export default Advert