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
  background-image: linear-gradient(
    to right bottom,
    #83111a,
    #730f34,
    #5a1c42,
    #3d2344,
    #262439,
    #22253c,
    #1d2640,
    #162743,
    #182b5c,
    #2a2c73,
    #482685,
    #6c0f90
  );
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
`;

const ContentContainer = styled.div`
  padding-top: 7.5vh;
  margin-bottom: 80px; // footer height
  display: flex;
  flex-direction: column;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
`;

const AboutBlurbContainer = styled.div`
  margin-bottom: 7.5vh; // xxxxxx
  max-width: 680px;
  padding: 25px;
  /* border: 1px solid pink; */
`;

const BlurbContent = styled.p`
  font-size: calc(14px + 0.7vmin);
  line-height: 1.65;
  padding-left: 15px;
  padding-right: 15px;
`;

const TBLink = styled.a`
  color: #f5f6f7;
`;

const RootIconContainer = styled.div<IconContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  margin-bottom: 50px; // xxxxxx
  /* background: transparent; */
  /* background-color: transparent; */
  /* border: 1px solid green; */
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
`;

const FooterContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0;
  width: 100vw;
  height: 80px; // footer height
  /* background-color: #1c1e21; */
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
        <meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no" />
        <title>Luke Hatcher</title>
      </Helmet>
      <ContentContainer>
        <AboutBlurbContainer>
          <BlurbContent>Hi,</BlurbContent>
          <br />
          <BlurbContent>
            &nbsp;&nbsp;&nbsp;&nbsp; I'm Luke Hatcher, a software engineer. I graduated from the University of
            Washington in 2020 with a B.S. in chemistry and a minor in math. I fell in love with programming while
            working in a computational chemistry research group at UW. I am passionate about building products that
            simplify peoples lives. In my free time I enjoy working on{' '}
            <TBLink href="https://github.com/lukehatcher/thoughtBubble-monorepo">ThoughtBubble</TBLink>, a productivity
            ecosystem for developers where they can sync their thoughts between their mobile devices and their code
            editors. My current programming interests revolve around TypeScript, C# and some occasional Python. Feel
            free to get in touch!
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
              href="https://luke-resume.s3.us-west-2.amazonaws.com/resume_luke_hatcher.pdf"
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

export default Index;
