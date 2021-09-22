import styled from 'styled-components';
import { IconContainerProps } from '../types';

export const PageContainer = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-family: Inter, SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #f5f6f7;
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
`;

export const ContentContainer = styled.div`
  padding-top: 7.5vh;
  margin-bottom: 80px; // footer height
  display: flex;
  flex-direction: column;
`;

export const AboutBlurbContainer = styled.div`
  margin-bottom: 7.5vh;
  max-width: 680px;
  padding: 25px;
`;

export const BlurbContent = styled.p`
  font-size: calc(14px + 0.7vmin);
  line-height: 1.65;
  padding-left: 15px;
  padding-right: 15px;
`;

export const TBLink = styled.a`
  color: #f5f6f7;
`;

export const RootIconContainer = styled.div<IconContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  margin-bottom: 50px;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const FooterContainer = styled.div`
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

export const FooterText = styled.p`
  font-size: 14px;
  margin-top: 5px;
`;
