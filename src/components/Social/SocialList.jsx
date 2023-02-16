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
        <SocialLink>
          <LinkedinIn />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink>
          <Twitter />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink>
          <Facebook />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink>
          <Pinterest />
        </SocialLink>
      </SocialItem>
    </SocialList>
  );
};
