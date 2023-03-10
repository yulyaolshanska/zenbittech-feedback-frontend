import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  padding: 75px 20px 90px 20px;

  @media ${(p) => p.theme.media.tablet} {
    /* width: 768px; */
    padding-top: 110px;
    padding-left: 50px;
    padding-bottom: 100px;
  }

  @media ${(p) => p.theme.media.desktop} {
    padding-top: 179px;
    padding-left: 150px;
    padding-bottom: 174px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 40px;
  font-weight: 400;
  line-height: 1.3;
  color: #3e3e3e;
`;
