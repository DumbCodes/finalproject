import React from "react";
import Info from "../components/Info";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Categories from "../components/Categories";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(#1313137d, #0000007d),
    url("./public/images/bgimage.png") center;
  background-size: cover;
`;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Info />
      <Categories />
    </Container>
  );
};

export default Home;
