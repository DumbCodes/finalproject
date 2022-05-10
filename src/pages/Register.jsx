import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#1313137d, #0000007d),
    url("./public/images/regimg.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//Conatiner for all the registration items
const Wrapper = styled.div`
  width: 40%;
  padding: 25px;
  background: linear-gradient(#ffffff83, #d4d4d4ac);
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #151515;
  color: white;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title> Create an Account</Title>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email" />
          <Input placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />

          <Agreement>
            By creating an account, I concent to use my personal data in
            accordance to the <b>PRIVACY POLICY</b>
          </Agreement>

          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
