import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding-top: 75px;

  @media ${(p) => p.theme.media.tablet} {
    padding-top: 110px;
    padding-left: 50px;
  }

  @media ${(p) => p.theme.media.desktop} {
    padding-top: 179px;
    padding-left: 150px;
    padding-right: 150px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 40px;
  font-weight: 400;
  line-height: 1.3;
  color: #3e3e3e;
`;
