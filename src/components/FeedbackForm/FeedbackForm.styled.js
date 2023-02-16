import styled from "styled-components";

export const Container = styled.div`
  /* position: relative; */
`;

export const Form = styled.form`
  z-index: 10;
  display: flex;
  flex-direction: column;
  @media ${(p) => p.theme.media.tablet} {
    width: 557px;
  }
`;

export const Input = styled.input`
  z-index: 10;
  margin-bottom: 8px;
  padding: 16px 24px;
  font-size: 18px;
  line-height: 1.8;
  color: #2d2d2d;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
  @media ${(p) => p.theme.media.tablet} {
    padding: 20px 36px;
    /* height: 44px; */
  }
  @media ${(p) => p.theme.media.desktop} {
    padding: 30px 46px;
    /* height: 44px; */
  }
`;

export const SubmitButton = styled.button`
  @media ${(p) => p.theme.media.mobileM} {
    margin-left: auto;
    margin-right: auto;
  }
  width: 218px;
  z-index: 10;
  /* height: 73px; */
  color: #ffffff;
  font-size: 16px;
  line-height: 1.8;
  background: #fad34f;
  border-radius: 500px;
  border: none;
  padding: 27px 52px;
  &:hover {
    cursor: pointer;
  }
`;

export const ErrorText = styled.p`
  margin: -8px 0px 6px 10px;

  /* &:last-of-type {
    margin-top: -23px;
  } */
  font-size: 10px;
  color: red;
  font-weight: 500;
  font-style: italic;

  @media ${(p) => p.theme.media.tablet} {
    font-size: 12px;
  }
`;

export const Textarea = styled.textarea`
  z-index: 10;
  margin-bottom: 23px;
  padding: 16px 24px;
  box-sizing: border-box;
  font-size: 18px;
  line-height: 1.8;
  color: #2d2d2d;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  resize: none;
  &:hover {
    cursor: pointer;
  }
  @media ${(p) => p.theme.media.tablet} {
    padding: 20px 36px;
    width: 557px;
    /* height: 44px; */
  }
  @media ${(p) => p.theme.media.desktop} {
    padding: 30px 46px;
    /* height: 44px; */
  }
`;
