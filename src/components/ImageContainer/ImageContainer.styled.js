import styled from "styled-components";
import smallYellowSmileImg from "../../img/smallYellSmile.svg";
import pinkSmileImg from "../../img/pinkSmile.svg";
import yellowSmileImg from "../../img/yellowSmile.svg";

import cloudsImg from "../../img/clouds.svg";

export const ImgContainer = styled.div`
  position: relative;
`;

export const YellowSmile = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  top: 18px;
  left: 18px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${smallYellowSmileImg});

  @media ${(p) => p.theme.media.tablet} {
    width: 70px;
    height: 70px;
  }

  @media ${(p) => p.theme.media.desktop} {
    top: 30px;
    left: 28px;
    width: 128px;
    height: 128px;
  }
`;

export const PinkSmile = styled.div`
  position: absolute;
  background-image: none;

  @media ${(p) => p.theme.media.desktop} {
    background-image: url(${pinkSmileImg});
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 5;
    top: 558px;
    right: 355px;
    width: 290px;
    height: 290px;
  }
`;

export const BigYellowSmile = styled.div`
  position: absolute;
  background-image: none;

  @media ${(p) => p.theme.media.desktop} {
    background-image: url(${yellowSmileImg});
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 6;
    top: 515px;
    right: 520px;
    width: 127px;
    height: 127px;
  }
`;

export const Clouds = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-image: url(${cloudsImg});
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 1;
  width: 100%;
  height: 100%;

  @media ${(p) => p.theme.media.desktop} {
    top: 101px;
  }
`;
