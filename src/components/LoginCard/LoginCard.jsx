import styled from "styled-components";
import Button from "./Button";
import Logo from "../../imgs/logo-resized.png";
import React, { useState } from "react";

import Input from "./Input";

function LoginCard() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleLogin = async () => {
    let result = await fetch("https://compact-hydro.herokuapp.com/api/signin",{
      method:'post',
      body:JSON.stringify({email,password}),
      headers:{
        'Content-Type':'application/json'
      }
    });
    result = await result.json();
    console.warn(result)
  }

  return (
    <MainContainer>
      <LogoDiv>
        <img src={Logo} alt="" />
      </LogoDiv>

      <InputContainer>
        <Input
          type="text"
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          type="password"
          placeholder="Enter your Password"
          onChange={(e) => setEmail(e.target.value)}
          value={password}
        />
      </InputContainer>
      <ButtonContainer>
        <Button content="Login" onClick={handleLogin} />
      </ButtonContainer>
      <HorizontalRule />
      <ForgotPassword>Forgot Password ?</ForgotPassword>
    </MainContainer>
  );
}

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: centre;
  align-items: center;
  margin-top: 2rem;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

const LoginWith = styled.h5`
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #f1a921 0%, #169cdf 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;

export default LoginCard;
