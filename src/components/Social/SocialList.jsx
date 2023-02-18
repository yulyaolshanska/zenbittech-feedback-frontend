import {
  SocialList,
  SocialItem,
  SocialLink,
  LinkedinIn,
  Twitter,
  Facebook,
  Pinterest,
} from "./SocialList.styled";

export const Social = () => {
  return (
    <SocialList>
      <SocialItem>
        <SocialLink
          href="https://www.linkedin.com/in/julia-olshanska-1529b2230/"
          target="_blank"
        >
          <LinkedinIn />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href="https://twitter.com/" target="_blank">
          <Twitter />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href="https://www.facebook.com/" target="_blank">
          <Facebook />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href="https://ru.pinterest.com/" target="_blank">
          <Pinterest />
        </SocialLink>
      </SocialItem>
    </SocialList>
  );
};
