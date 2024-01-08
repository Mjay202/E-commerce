import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: coral;
    font-size: 14px;
    font-weight: 500;
    color: white;
    height: 30px; 

`;

const Advert = () => {
  return (
    <Container>
        <marquee behavior="" direction="right">Number one Best Selling Store in Africa!!! Best Deals, Varieties of Choices, Global brands.. </marquee></Container>
  )
}

export default Advert