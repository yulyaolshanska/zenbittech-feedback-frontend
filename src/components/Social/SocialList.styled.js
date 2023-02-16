import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa";
import styled from "styled-components";

export const SocialList = styled.ul`
  display: flex;
  @media ${(p) => p.theme.media.tablet} {
    margin-left: 130px;
  }
  @media ${(p) => p.theme.media.desktop} {
    margin-left: 280px;
  }
`;
export const SocialItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
export const SocialLink = styled.a``;

export const LinkedinIn = styled(FaLinkedinIn)``;
export const Twitter = styled(FaTwitter)``;
export const Facebook = styled(FaFacebookF)``;
export const Pinterest = styled(FaPinterestP)``;
