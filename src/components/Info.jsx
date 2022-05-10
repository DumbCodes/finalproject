import styled from "styled-components";
import React from "react";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 25px;
  display: flex;
  align-items: center;
  color: white;
`;

const Wrapper = styled.div`
  flex: 1;
  //position: relative;
`;

// Left Side

const Left = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  //position: absolute;
`;

//Right Side
const Right = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
`;
const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 100px;
  margin-left: 20px;
`;
const Description = styled.p`
  margin: 25px 20px;
  font-size: 20px;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 20px 50px;
  margin-top: 20px;
  margin-left: 20px;
  font-size: 20px;
  border: none;
  cursor: pointer;
  background-color: #c2c2c2;
  color: #2c2c2c;
`;

const Info = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Title> Style Meets Comfort </Title>

          <Description>
            One Stop for all your sneaker needs. Buy, Customize, Clean and
            Repair your shoes with SneakrGemz.
          </Description>

          <Button>Find Out More</Button>
        </Left>
      </Wrapper>

      <Right></Right>
    </Container>
  );
};

export default Info;
