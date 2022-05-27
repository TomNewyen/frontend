import React from "react";
import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@mui/icons-material";
  import styled from "styled-components";
 
  
  const Container = styled.div`
    display: flex;
    
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;    
  `
  const CenterNext = styled.div`
  flex: 1;
  padding: 20px;    
`
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
  `
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    
  `
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>KANDN.</Logo>
        <Desc>
          A project dev by Nghiep aka Tom and Khoa. That's why the brand name is KANDN.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>CATEGORIES</Title>
        <List>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
        </List>
      </Center>
      <CenterNext>
      <Title>CLIENT </Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </CenterNext>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> International University - VNU, Thu Duc, HCMC
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +84 942377388
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> nmnghiep.ityu@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer