import { Social } from "components/Social/SocialList";
import {
  FooterContainer,
  GreenSmile,
  PinkSmile,
  YellowSmile,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <PinkSmile />
      <GreenSmile />
      <YellowSmile />
      <Social />
    </FooterContainer>
  );
};

export default Footer;
