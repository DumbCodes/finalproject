import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#1313137d, #0000007d),
    url("./images/loginimg.jpg") center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

//Container for Login Items
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
  cursor: pointer;
  & :disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Links = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <Container>
      <Wrapper>
        <Title>LOG IN</Title>
        <Form>
          <Input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button onClick={handleClick}>Sign In</Button>

          <Links>Forget Password?</Links>
          <Link to="/register">
            <Links>Create new account</Links>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
