import styled from "styled-components";

export const Body = styled.body`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  height: 100%;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.nopadding ? "0" : "16px 16px 0")};

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;

export const Face = styled.div`
  width: 300px;
  height: 300px;
  border: 4px solid #383a41;
  border-radius: 10px;
  background-color: #d8b6a4;
  margin: 0 auto;
  margin-top: 100px;
  @media ${(props) => props.theme.breakpoints.xl} {
    margin-top: 40px;
    transform: scale(0.8);
  }
`;

export const Band = styled.div`
  width: 350px;
  height: 27px;
  border: 4px solid #383a41;
  border-radius: 5px;
  margin-left: -25px;
  margin-top: 50px;
  &:before {
    content: "";
    display: inline-block;
    height: 27px;
    width: 30px;
    background-color: rgba(#ffffff, 0.3);
    position: absolute;
    z-index: 999;
  }

  &:after {
    content: "";
    display: inline-block;
    height: 27px;
    width: 30px;
    background-color: rgba(#383a41, 0.3);
    position: absolute;
    z-index: 999;
    right: 0;
    margin-top: -27px;
  }
`;

export const Red = styled.div`
  height: calc(100% / 3);
  width: 100%;
  background-color: #eb6d6d;
`;

export const White = styled.div`
  height: calc(100% / 3);
  width: 100%;
  background-color: #ffffff;
`;

export const Blue = styled.div`
  height: calc(100% / 3);
  width: 100%;
  background-color: #5e7fdc;
`;

export const Eyes = styled.div`
  width: 128px;
  margin: 0 auto;
  margin-top: 40px;
  &:before {
    content: "";
    display: inline-block;
    width: 30px;
    height: 15px;
    border: 7px solid #383a41;
    margin-right: 20px;
    border-top-left-radius: 22px;
    border-top-right-radius: 22px;
    border-bottom: 0;
  }

  &:after {
    content: "";
    display: inline-block;
    width: 30px;
    height: 15px;
    border: 7px solid #383a41;
    margin-left: 20px;
    border-top-left-radius: 22px;
    border-top-right-radius: 22px;
    border-bottom: 0;
  }
`;
export const Dimples = styled.div`
  width: 180px;
  margin: 0 auto;
  margin-top: 15px;

  &:before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 80px;
    border-radius: 50%;
    background-color: #eb6d6d;
  }

  &:after {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-left: 80px;
    border-radius: 50%;
    background-color: #eb6d6d;
  }
`;

export const Mouth = styled.div`
  width: 40px;
  height: 5px;
  border-radius: 5px;
  background-color: #383a41;
  margin: 0 auto;
  margin-top: 25px;
`;

export const H1 = styled.h1`
  font-weight: 800;
  color: #383a41;
  text-align: center;
  font-size: 2.5em;
  padding-top: 20px;
  @media ${(props) => props.theme.breakpoints.xl} {
    padding-left: 20px;
    padding-right: 20px;
    font-size: 2em;
  }
`;

export const H2 = styled.h2`
  font-weight: 400;
  color: #383a41;
  text-align: center;
  font-size: 1rem;
  padding-top: 10px;
  @media ${(props) => props.theme.breakpoints.xl} {
    padding-left: 20px;
    padding-right: 20px;
    font-size: 2em;
  }
`;

export const Button = styled.div`
  width: ${({ alt }) => (alt ? "150px" : "262px")};
  height: ${({ alt }) => (alt ? "52px" : "64px")};
  border-radius: 50px;
  font-size: ${({ alt }) => (alt ? "20px" : "24px")};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  color: #fff;
  background: ${({ alt }) =>
    alt
      ? "linear-gradient(270deg, #ff622e 0%, #B133FF 100%)"
      : "linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)"};
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => (disabled ? ".5" : "1")};

  @media ${(props) => props.theme.breakpoints.md} {
    width: ${({ alt }) => (alt ? "150px" : "184px")};
    height: ${({ alt }) => (alt ? "52px" : "48px")};
    font-size: ${({ alt }) => (alt ? "20px" : "16px")};
    margin-bottom: ${({ alt }) => (alt ? "0" : "64px")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 14px;
    margin-bottom: ${({ alt }) => (alt ? "0" : "32px")};
  }
`;
