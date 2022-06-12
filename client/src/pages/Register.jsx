import styled from "styled-components";
import React from "react";
import {register} from '../redux/apiCall'
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://www.dior.com/couture/var/dior/storage/images/33869816/3-eng-HK/cdc-femme-dioriviera6_1440_1200.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Error = styled.span`
  color: red;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled{
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const {isFetching,error} = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { username, email, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>Register</Title>
        <Form>
          <Input placeholder="Username"
            onChange={(e) => setUsername(e.target.value)} />
          <Input placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}/>
          <Input placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}/>
          <Button onClick={handleClick} disabled={isFetching}>Register</Button>
          {error && <Error>Incorect information !!</Error>}
          <Link>Already have an account? Login</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;