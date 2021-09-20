import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #f5f6f7;
  /* justify-content: center; */
  /* align-items: center; */
`;

const HeaderContainer = styled.div`
  height: 10vh;
  top: 0px;
  display: flex;
  background-color: rebeccapurple;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const AboutBlurbContainer = styled.div`
  max-width: 680px;
  border: 1px solid red;
  padding: 15px;
`;

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100vw;
  background-color: #1c1e21;
  text-align: center;
  padding: 30px;
`;

const Index = () => {
  console.log('Looking for something...? 👀');
  return (
    <PageContainer>
      <Helmet>
        <title>Luke Hatcher</title>
      </Helmet>
      <HeaderContainer>
        <h1>Luke Hatcher</h1>
      </HeaderContainer>
      <AboutBlurbContainer>
        <p>
          Hi, I'm Luke, a software engineer. I graduated from the University of Washington in 2020 with a B.S. in
          chemistry and a minor in math. I fell in love with programming while working in a computational chemistry
          research group at UW. I am passionate about building products that simplify peoples lives. In my free time I
          enjoy working on thoughtBubble, a productivity ecosystem for developers where they can sync their thoughts
          between their mobile devices and their code editors. Check it out below! My current programming interests
          revolve around TypeScript, C# and the occasional Python. Feel free to get in touch!
        </p>
      </AboutBlurbContainer>
      <div>github linkedin mailto resume</div>
      <FooterContainer>
        <p>© Copyright 2021, Luke Hatcher</p>
        <br />
        <p>📍 Seattle, WA</p>
      </FooterContainer>
    </PageContainer>
  );
};

// link to thoughtbubbe in paragraph
// social buttons stack on eachother

export default Index;
