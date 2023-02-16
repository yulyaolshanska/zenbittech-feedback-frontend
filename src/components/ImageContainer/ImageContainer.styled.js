import styled from "styled-components";
import smallYellowSmileImg from "../../img/smallYellSmile.svg";
import pinkSmileImg from "../../img/pinkSmile.svg";
import yellowSmileImg from "../../img/yellowSmile.svg";
import mapImg from "../../img/map.png";
import cloudsImg from "../../img/clouds.svg";
import sunImg from "../../img/sun.svg";

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

export const Map = styled.div`
  background-image: none;

  @media ${(p) => p.theme.media.tablet} {
    position: absolute;
    top: -10px;
    right: 0px;
    right: -280px;
    width: 770px;
    height: 770px;
    border-radius: 50%;

    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${mapImg});
  }

  @media ${(p) => p.theme.media.desktop} {
    right: 0px;
    width: 920px;
    height: 920px;
    right: -286px;
  }
`;

/* background-image: none;
  border-radius: 50%;
  @media ${(p) => p.theme.media.tablet} {
    position: absolute;
    top: 0px;
    right: -210px;
    width: 670px;
    height: 670px;
    background-size: contain; 
     right: -297px; 
     right: -140px;
    width: 370px;
    height: 370px;
    background-size: cover; 
    background-repeat: no-repeat;
    background-image: url(${mapImg});
  }
  @media ${(p) => p.theme.media.desktop} {
    right: -316px;
     width: 626px; 
    width: 920px;
    height: 920px;
   } */

export const Sun = styled.div`
  @media ${(p) => p.theme.media.desktop} {
    position: absolute;
    z-index: 4;
    top: 0;
    right: 0;
    background-image: url(${sunImg});
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 1;
    width: 87px;
    height: 87px;
  }

  @media ${(p) => p.theme.media.desktop} {
    top: 21px;
    right: 660px;
  }
`;
