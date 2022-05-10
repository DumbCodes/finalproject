import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#1313137d, #0000007d),
    url("./public/images/loginimg.jpg") center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

//Conatiner for Login Items
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background: linear-gradient(#ffffff83, #d4d4d4ac);
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 70%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 45%;
  border: none;
  padding: 15px 20px;
  background-color: #151515;
  color: white;
  margin: 10px 0px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>LOG IN</Title>
        <Form>
          <Input placeholder="Username" />
          <Input type="password" placeholder="Password" />

          <Button>Sign In</Button>

          <Link>Forget Password?</Link>
          <Link>Create new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
