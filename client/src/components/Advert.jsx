import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: teal;
  font-size: 14px;
  font-weight: 500;
  margin-top: 70px;
  color: white;
  padding: 10px;
  height: 40px;
  ${mobile({ fontSize: "7px", margin: '20px 0px', width: '100vw ', height: '15px'})}
`;

const Advert = () => {
  return (
    <Container>
      Number one Best Selling Store in Africa!!! Best Deals, Varieties of Choices, Global brands..
    </Container>
  )
}

export default Advert