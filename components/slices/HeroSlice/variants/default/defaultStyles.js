import styled from "styled-components";

export const Anchor = styled.a`
  display: flex;
  justify-content: flex-start;
  margin: 0;
  margin-top: 20px;
  &.fullwidth {
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  text-decoration: none;
`;
export const ButtonContainer = styled.button`

  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-family: ${(props) => props.theme.typography.fontFamily};
  white-space: nowrap;
  border-radius: ${(props) => props.theme.button.borderRadius};
  font-size: 16px;
  line-height: 24px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  height: ${(props) => props.theme.button.height};
  
  background:${(props) => props.theme.colors.bgColorTertiary};
  
  color:${(props) => props.theme.colors.white};
  
  :hover {
    background: #e4e1e1;
    color:${(props) => props.theme.colors.grey};
  }
  padding:${(props) => props.theme.button.padding};
  
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
  }
`;

export const SectionContentWrapper = styled.div`
width: 100%;
max-width: 1200px;
margin: 0 auto;
// padding: ${(props) => props.bgImage ? '64px 24px' : '0'};
padding: 64px 24px;
position: relative;
z-index: 10;
 padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  

@media (max-width: 768px) {
  padding: ${(props) => props.bgImage ? '32px 16px' : '0'};
}
  

  
    

`;
export const Content = styled.div`
  width: 100%;
  max-width: 1136px;
  margin: 0 auto;
  margin-top: 42px;
  padding: 8px 16px;
  position: relative;
  z-index: 10;
    
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  // padding-top:30px;
   
  // margin-bottom:102px;
  position: relative;
  z-index: 10;
  
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
  }
  
  @media (max-width: 688px) {
    margin-top: 20px;
    margin-bottom: 40px;
    min-height: 300px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
  }
`;

export const Description = styled.div`
  z-index: 10;
  
  background: rgba(255,255,255,.8);
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  // margin-left: 200px;
  padding-bottom: 50px;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    margin-left: 0;
  }
  @media (max-width: 688px) {
    width: 100%;
    padding: 15px;
    margin-bottom: 20px;
    text-align: center;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    text-align: center;
  }
  h1 {
    margin: 0;
    margin-bottom: 8px;
    line-height:  ${(props) => props.theme.typography.h1.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.h1.desktop.fontSize};
    color: #030302;
    z-index: 10px;
    em {
      color: ${(props) => props.theme.colors.textLightPrimary};
      font-style: normal;
      z-index: 10px;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
      // width: 70%;
      line-height:  ${(props) => props.theme.typography.h1.mobile.lineHeight};
      font-size: ${(props) => props.theme.typography.h1.mobile.fontSize};
      margin-bottom: 16px;
      em {
        color: green;
        font-style: normal;
        z-index: 10px;
      }
    }
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      width: 100%;
      line-height:  ${(props) => props.theme.typography.h1.mobile.lineHeight};
      font-size: ${(props) => props.theme.typography.h1.mobile.fontSize};
      em {
        color: ${(props) => props.theme.colors.textLightPrimary};
        font-size: 34px;
        z-index: 10px;
      }
      
    }
  }
  p {
    margin: 0;
    letter-spacing: 0.25px;
    line-height:  ${(props) => props.theme.typography.p.desktop.lineHeight};
    font-size: 24px;
    z-index: 10px;
    font-weight: ${(props) => props.theme.typography.p.desktop.fontWeight};
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      margin-bottom: 32px;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      width: 100%;
      line-height:  ${(props) => props.theme.typography.p.mobile.lineHeight};
      font-size: ${(props) => props.theme.typography.p.mobile.fontSize};
      text-align: center;
    }
  }
`;

export const ImgHolder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 528px;
  z-index: 1;
  background-image: ${(props) => props.bgImage ? `url(${props.bgImage})` : ""};
  background-position: 100% 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  
  img {
    width: 100%;
    height: 100%;
  //   max-height: 400px;
  //   object-fit: cover;
  //   border-radius: 0;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    border-radius: 0;
    img {
      width: 100%;
      height: 100%;
      max-height: 400px;
      object-fit: cover;
    }
  }
  
  @media (max-width: 688px) {
    max-height: 350px;
    height: 350px;
    img {
      max-height: 350px;
      height: 350px;
    }
  }
`;

export const Button = styled.button`
    border-radius: 22px;
    height: 48px;
    padding: 10px 30px;
    border: transparent;
    font-size: 16px;
    margin-top: 18px;
    line-height: 24px;
    width:280px;
    height:48px;
    cursor: pointer; 
    color: ${(props) => props.theme.colors.secondary};
    background: ${(props) => props.theme.colors.bgColorTertiary};
`;
