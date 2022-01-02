import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { SiLinkedin } from '@react-icons/all-files/si/SiLinkedin';
import { SiGithub } from '@react-icons/all-files/si/SiGithub';
import { SiGmail } from '@react-icons/all-files/si/SiGmail';
import { FaFileAlt } from '@react-icons/all-files/fa/FaFileAlt';
import '@fontsource/inter';
import '../styles/index.css';
import { throttle, openNewTab } from '../utils';
import { directions } from '../types';
import {
  AboutBlurbContainer,
  BlurbContent,
  ContentContainer,
  FooterContainer,
  FooterText,
  IconContainer,
  PageContainer,
  RootIconContainer,
  TBLink,
} from '../components';

const Index = () => {
  const offWhite = '#f5f6f7';
  const [rootFlexDirection, setRootFlexDirection] = useState<directions>(directions.ROW);

  const handleScreenResize = (): void => {
    if (window.innerWidth < 960) {
      setRootFlexDirection(directions.COLUMN);
    } else {
      setRootFlexDirection(directions.ROW);
    }
  };

  useEffect(() => {
    handleScreenResize();
    window.addEventListener('resize', throttle(handleScreenResize));
  }, []);

  return (
    <PageContainer>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=5.0, user-scalable=1.0" />
        <meta name="description" content="Luke Hatcher's personal website" />
        <meta name="keywords" content="Luke Hatcher, Luke, Hatcher, software engineering, software development" />
        <meta name="author" content="Luke Hatcher" />
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
            <SiGithub
              className="icon"
              size="85"
              color={offWhite}
              onClick={() => openNewTab('https://github.com/lukehatcher')}
            />
            <SiLinkedin
              className="icon"
              size="85"
              color={offWhite}
              onClick={() => openNewTab('https://www.linkedin.com/in/lukehatcher98/')}
            />
          </IconContainer>
          <IconContainer>
            <SiGmail
              className="icon"
              size="85"
              color={offWhite}
              onClick={() => openNewTab('mailto:lukehatcher98@gmail.com')}
            />
            <FaFileAlt
              className="icon"
              size="85"
              color={offWhite}
              onClick={() => openNewTab('https://luke-resume.s3.us-west-2.amazonaws.com/resume_luke_hatcher.pdf')}
            />
          </IconContainer>
        </RootIconContainer>
      </ContentContainer>
      <FooterContainer>
        <FooterText>{`© Copyright ${new Date().getFullYear()}, Luke Hatcher`}</FooterText>
        <FooterText>📍 Seattle, WA</FooterText>
      </FooterContainer>
    </PageContainer>
  );
};

export default Index;
