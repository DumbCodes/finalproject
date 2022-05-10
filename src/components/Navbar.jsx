import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { Badge } from "@mui/material";

const Container = styled.div`
  height: 60px;
  color: white;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
//Logo container
const Left = styled.div`
  flex: 0.5;
`;
const Logo = styled.img`
  width: 150px;
  margin-left: 5px;
  cursor: pointer;
`;

// Central option's Container
const Center = styled.div`
  flex: 1.5;
  display: flex;
  align-items: center;
`;
const PageItems = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin: 25px;
`;

// Search, Sign up and cart Container
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  margin-right: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src="./public/images/logo.png" alt="" />
        </Left>

        <Center>
          <PageItems>Collection</PageItems>
          <PageItems>New Arrival</PageItems>
          <PageItems>Customization</PageItems>
          <PageItems>Products</PageItems>
          <PageItems>Book a Visit</PageItems>
        </Center>

        <Right>
          <SearchContainer>
            <Input />
            <Search style={{ color: "white", fontSize: 16 }} />
          </SearchContainer>

          <MenuItem>Register</MenuItem>

          <MenuItem>Sign In</MenuItem>

          <MenuItem>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
