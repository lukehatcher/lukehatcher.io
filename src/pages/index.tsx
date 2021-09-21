import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { SiLinkedin } from '@react-icons/all-files/si/SiLinkedin';
import { SiGithub } from '@react-icons/all-files/si/SiGithub';
import { SiGmail } from '@react-icons/all-files/si/SiGmail';
import { FaFileAlt } from '@react-icons/all-files/fa/FaFileAlt';
import '@fontsource/inter';
import '../styles/index.css';

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
  font-family: Inter, SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #f5f6f7;
  /* justify-content: center; */
  align-items: center;
`;

const HeaderContainer = styled.div`
  position: absolute; // ========
  top: 0;
  height: 80px; // ========
  width: 100vw;
  display: flex;
  background-color: rebeccapurple;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const HeaderText = styled.h1`
  font-size: 42.5px;
`;

const ContentContainer = styled.div`
  padding-top: 80px;
  margin-top: 80px;
  margin-bottom: 80px; // footer height
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: space-evenly; */
  /* border: 1px solid green; */
`;

const AboutBlurbContainer = styled.div`
  margin-bottom: 50px; // xxxxxx
  max-width: 680px;
  padding: 30px;
  /* border: 1px solid pink; */
`;

const BlurbContent = styled.p`
  font-size: calc(14px + 0.7vmin);
  line-height: 1.65;
  padding-left: 15px;
  padding-right: 15px;
`;

const RootIconContainer = styled.div<IconContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  /* border: 1px solid red; */
  margin-bottom: 50px; // xxxxxx
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
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
    console.log(window.innerWidth);
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

  useEffect(() => {
    let i = 1;
    const name = 'Luke Hatcher';
    const typeWriter = () => {
      if (i === name.length + 1) {
        clearInterval(intervalId);
      }
      setHeaderText(name.slice(0, i));
      i++;
    };
    const intervalId = setInterval(typeWriter, 45);
  }, []);

  return (
    <PageContainer>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no" />
        <title>Luke Hatcher</title>
      </Helmet>
      <HeaderContainer>
        <HeaderText>{headerText}</HeaderText>
      </HeaderContainer>
      <ContentContainer>
        <AboutBlurbContainer>
          <BlurbContent>Hi,</BlurbContent>
          <br />
          <BlurbContent>
            &nbsp;&nbsp;&nbsp;&nbsp; I'm Luke, a software engineer. I graduated from the University of Washington in
            2020 with a B.S. in chemistry and a minor in math. I fell in love with programming while working in a
            computational chemistry research group at UW. I am passionate about building products that simplify peoples
            lives. In my free time I enjoy working on{' '}
            <a href="https://github.com/lukehatcher/thoughtBubble-monorepo">thoughtBubble</a>, a productivity ecosystem
            for developers where they can sync their thoughts between their mobile devices and their code editors. My
            current programming interests revolve around TypeScript, C# and the occasional Python. Feel free to get in
            touch!
          </BlurbContent>
        </AboutBlurbContainer>
        <RootIconContainer flexDirection={rootFlexDirection}>
          <IconContainer>
            <a
              href="https://github.com/lukehatcher"
              className="icon"
              rel="noreferrer"
              target="_blank"
              title="GitHub Profile"
            >
              <SiGithub size="85" color="#f5f6f7" />
            </a>
            <a
              href="https://www.linkedin.com/in/lukehatcher98/"
              className="icon"
              rel="noreferrer"
              target="_blank"
              title="LinkIn Profile"
            >
              <SiLinkedin size="85" color="#f5f6f7" />
            </a>
          </IconContainer>
          <IconContainer>
            <a href="mailto:lukehatcher98@gmail.com" className="icon" rel="noreferrer" target="_blank" title="Gmail">
              <SiGmail size="85" color="#f5f6f7" />
            </a>
            <a
              href="https://luke-resume.s3-us-west-2.amazonaws.com/lukeHatcher-resume.pdf"
              className="icon"
              target="_blank"
              title="Resume"
            >
              <FaFileAlt size="85" color="#f5f6f7" />
            </a>
          </IconContainer>
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
