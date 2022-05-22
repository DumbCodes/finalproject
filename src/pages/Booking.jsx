import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#1313137d, #0000007d),
    url("./images/bgimage.png") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 10px 10px 00px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #151515;
  color: white;
`;

const Booking = () => {
  return (
    <Container>
      <Wrapper>
        <Title> Book an Appointment </Title>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email" />
          <p>Enter Booking Date</p>
          <Input type="date" placeholder="Booking date" />
          <Input placeholder="Residential Address" />
          <Input placeholder="Reason for booking" />

          <Agreement>
            You can cancel or update booking via the confirmation email sent to
            you.
          </Agreement>

          <Button>Submit</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Booking;
