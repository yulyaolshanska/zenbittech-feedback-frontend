import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa";
import styled from "styled-components";

export const SocialList = styled.ul`
  display: flex;
  z-index: 15;
  @media ${(p) => p.theme.media.tablet} {
    margin-left: 130px;
  }
  @media ${(p) => p.theme.media.desktop} {
    margin-left: 280px;
  }
`;
export const SocialItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
export const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  width: 18px;
  height: 18px;
  &:hover {
    cursor: pointer;
  }
`;

export const LinkedinIn = styled(FaLinkedinIn)`
  color: #696969;
  width: 15px;
  height: 16px;
`;
export const Twitter = styled(FaTwitter)`
  color: #696969;
  width: 19px;
  height: 16px;
`;
export const Facebook = styled(FaFacebookF)`
  color: #696969;
  width: 10px;
  height: 18px;
`;
export const Pinterest = styled(FaPinterestP)`
  color: #696969;
  width: 13px;
  height: 15px;
`;
