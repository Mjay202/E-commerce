import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
`;
const Center = styled.div`
    flex: 1;
`;
const Right = styled.div`
    flex: 1;
`;

const NavBar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <span>
                    EN
                </span>
            </Left>
            <Center>
                Center
            </Center>
            <Right>
                Right
            </Right>
        </Wrapper>
    </Container>
  )
}

export default NavBar