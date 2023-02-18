import styled from "styled-components";
import smallYellowSmileImg from "../../img/smallYellSmile.svg";
import pinkSmileImg from "../../img/pinkSmile.svg";
import greenSmileImg from "../../img/greenSmile.svg";

export const FooterContainer = styled.footer`
  @media ${(p) => p.theme.media.mobileM} {
    justify-content: center;
  }
  position: relative;
  display: flex;
  overflow: hidden;
  z-index: 20;
  padding: 40px 20px;
  height: 100px;
  width: 100%;
  border: 1px solid #d8d8d8;
  background-color: #fafafa;
  box-sizing: border-box;
  @media ${(p) => p.theme.media.desktop} {
    height: 200px;
    padding: 60px 30px;
  }
`;

export const PinkSmile = styled.div`
  position: absolute;
  width: 135px;
  height: 135px;
  top: -8px;
  left: -10px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${pinkSmileImg});

  @media ${(p) => p.theme.media.tablet} {
    width: 135px;
    height: 135px;
  }

  @media ${(p) => p.theme.media.desktop} {
    top: -38px;
    left: 20px;
    width: 290px;
    height: 290px;
  }
`;

export const GreenSmile = styled.div`
  position: absolute;
  top: 0;
  right: 107px;
  width: 40px;
  height: 40px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${greenSmileImg});

  @media ${(p) => p.theme.media.desktop} {
    right: 128px;
    width: 78px;
    height: 97px;
  }
`;

export const YellowSmile = styled.div`
  position: absolute;
  top: 10px;
  right: -25px;
  width: 78px;
  height: 78px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${smallYellowSmileImg});

  @media ${(p) => p.theme.media.desktop} {
    top: 65px;
    right: -35px;
    width: 128px;
    height: 128px;
  }
`;
