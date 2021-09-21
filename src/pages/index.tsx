import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';
import styled from 'styled-components';
import { SiLinkedin } from '@react-icons/all-files/si/SiLinkedin';
import { SiGithub } from '@react-icons/all-files/si/SiGithub';
import { SiGmail } from '@react-icons/all-files/si/SiGmail';
import { FaFileAlt } from '@react-icons/all-files/fa/FaFileAlt';

enum directions {
  ROW = 'row',
  COLUMN = 'column',
}

interface IconContainerProps {
  flexDirection: string;
}

const PageContainer = styled.div`
  min-height: 100vh; // ========
  position: relative; // ========
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #f5f6f7;
  /* justify-content: center; */
  align-items: center;
`;

const HeaderContainer = styled.div`
  position: absolute; // ========
  top: 0;
  height: 10vh; // ========
  width: 100vw;
  display: flex;
  background-color: rebeccapurple;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const HeaderText = styled.h1`
  font-size: 45px;
`;

const ContentContainer = styled.div`
  margin-top: 15vh;
  padding-bottom: 80px; // footer height
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid green; */
`;

const AboutBlurbContainer = styled.div`
  margin-bottom: 75px;
  max-width: 680px;
  padding: 30px;
  /* border: 1px solid red; */
`;

const BlurbContent = styled.p`
  font-size: 16px;
  line-height: 1.65;
  padding-left: 15px;
  padding-right: 15px;
`;

const RootIconContainer = styled.div<IconContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
`;

const IconContainer1 = styled.div<IconContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: center;
  justify-content: center;
`;

const IconContainer2 = styled.div<IconContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: center;
  justify-content: center;
`;

const FooterContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0;
  width: 100vw;
  height: 80px; // footer height
  background-color: #1c1e21;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const FooterText = styled.p`
  font-size: 14px;
  margin-top: 5px;
`;

const Index = () => {
  const [rootFlexDirection, setRootFlexDirection] = useState<directions>(directions.ROW);
  const [flexDirection, setFlexDirection] = useState<directions>(directions.ROW);

  const [headerText, setHeaderText] = useState<string>('');

  const throttle = (fxn: (...args: any[]) => void, timeout: number = 200) => {
    let wait = false;
    return (...args: any) => {
      if (!wait) {
        fxn(...args);
        wait = true;
        setTimeout(() => {
          wait = false;
        }, timeout);
      }
    };
  };

  const handleResize = () => {
    if (window.innerWidth < 960) {
      // 960, 680
      setRootFlexDirection(directions.COLUMN);
    } else {
      setRootFlexDirection(directions.ROW);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', throttle(handleResize));
  }, []);

  return (
    <PageContainer>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale = 1.0, 
maximum-scale=1.0, user-scalable=no"
        />
        <title>Luke Hatcher</title>
      </Helmet>
      <HeaderContainer>
        <HeaderText>Luke Hatcher</HeaderText>
      </HeaderContainer>
      <ContentContainer>
        <AboutBlurbContainer>
          <BlurbContent>Hi,</BlurbContent>
          <br />
          <BlurbContent>
            &nbsp;&nbsp;&nbsp;&nbsp; I'm Luke, a software engineer. I graduated from the University of Washington in
            2020 with a B.S. in chemistry and a minor in math. I fell in love with programming while working in a
            computational chemistry research group at UW. I am passionate about building products that simplify peoples
            lives. In my free time I enjoy working on thoughtBubble, a productivity ecosystem for developers where they
            can sync their thoughts between their mobile devices and their code editors. Check it out below! My current
            programming interests revolve around TypeScript, C# and the occasional Python. Feel free to get in touch!
          </BlurbContent>
        </AboutBlurbContainer>
        <RootIconContainer flexDirection={rootFlexDirection}>
          <IconContainer1 flexDirection={flexDirection}>
            <a href="https://github.com/lukehatcher" rel="noreferrer" target="_blank" title="GitHub Profile">
              <SiGithub size="85" color="#f5f6f7" />
            </a>
            <a
              href="https://www.linkedin.com/in/lukehatcher98/"
              rel="noreferrer"
              target="_blank"
              title="LinkIn Profile"
            >
              <SiLinkedin size="85" color="#f5f6f7" />
            </a>
          </IconContainer1>
          <IconContainer2 flexDirection={flexDirection}>
            <a href="mailto:lukehatcher98@gmail.com" rel="noreferrer" target="_blank" title="Gmail">
              <SiGmail size="85" color="#f5f6f7" />
            </a>
            <a
              href="https://luke-resume.s3-us-west-2.amazonaws.com/lukeHatcher-resume.pdf"
              target="_blank"
              title="Resume"
            >
              <FaFileAlt size="85" color="#f5f6f7" />
            </a>
          </IconContainer2>
        </RootIconContainer>
      </ContentContainer>
      <FooterContainer>
        <FooterText>© Copyright 2021, Luke Hatcher</FooterText>
        <FooterText>📍 Seattle, WA</FooterText>
      </FooterContainer>
    </PageContainer>
  );
};

// link to thoughtbubbe in paragraph

export default Index;
