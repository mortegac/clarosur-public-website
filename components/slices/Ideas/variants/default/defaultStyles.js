import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    margin-right: 0;
  }
  
  h2 {
    text-align: center;
    margin: 0;
    margin-bottom: 4px;
    font-weight:  ${(props) => props.theme.typography.h2.desktop.fontWeight};
    line-height:  ${(props) => props.theme.typography.h2.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.h2.desktop.fontSize};
    color: ${(props) => props.theme.colors.white};
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      font-weight:  ${(props) => props.theme.typography.h2.desktop.fontWeight};
      line-height:  ${(props) => props.theme.typography.h2.desktop.lineHeight};
      font-size: ${(props) => props.theme.typography.h2.desktop.fontSize};
      margin-bottom: 6px;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      margin-top 6px;
      width: 100%;
      text-align: center;
      line-height:  ${(props) => props.theme.typography.h2.mobile.lineHeight};
    }
    
  }
  p {
    margin: 0;
    margin-top: 32px;
    line-height:  ${(props) => props.theme.typography.p.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.p.desktop.fontSize};
    font-weight: ${(props) => props.theme.typography.p.desktop.fontWeight};
    color: ${(props) => props.theme.colors.white};
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      margin-bottom: 22px;
    }
  }
  
  h3 {
    font-weight:  ${(props) => props.theme.typography.h3.desktop.fontWeight};
    line-height:  ${(props) => props.theme.typography.h3.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.h3.desktop.fontSize};
    text-align: center;
    color: ${(props) => props.theme.colors.white};
    margin-bottom: 8px;
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      // width: 70%;
      margin-bottom: 16px;
      font-weight:  ${(props) => props.theme.typography.h3.desktop.fontWeight};
      line-height:  ${(props) => props.theme.typography.h3.desktop.lineHeight};
      font-size: ${(props) => props.theme.typography.h3.desktop.fontSize};
    }
  }
`;



export const Button = styled.button`
margin-top: 36px;
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
width: fit-content;
height: ${(props) => props.theme.button.height};
background:${(props) => props.theme.button.white};
border: 1px solid ${(props) => props.theme.button.bgColorTertiary};
color:${(props) => props.theme.colors.bgColorTertiary};
:hover {
  background-color: ${(props) => props.theme.button.bgPrimaryOver};
  color: ${(props) => props.theme.colors.white};
}
padding:${(props) => props.theme.button.padding};


@media (max-width: ${(props) => props.theme.breakpoints.md}) {
  width: 100%;
}
`;


// export const Button = styled.button`
//   border-radius: 22px;
//   height: 46px;
//   padding: 10px 30px;
//   border: transparent;
//   font-weight: ${(props) => props.theme.typography.btnText.desktop.fontWeight};
//   line-height: ${(props) => props.theme.typography.btnText.desktop.lineHeight};
//   font-size: ${(props) => props.theme.typography.btnText.desktop.fontSize};
//   line-height: 24px;
//   cursor: pointer;
//   color: ${(props) => props.theme.colors.secondary};
//   background: ${(props) => props.theme.colors.bgColorQuaternary};
//   @media (max-width: ${(props) => props.theme.breakpoints.md}) {
//     font-weight: ${(props) => props.theme.typography.btnText.mobile.fontWeight};
//     line-height: ${(props) => props.theme.typography.btnText.mobile.lineHeight};
//     font-size: ${(props) => props.theme.typography.btnText.mobile.fontSize};
//   }

//   &:hover {
//     background-color: ${(props) => props.theme.colors.bgHoverBtn};
//   }
//   &:active {
//     transform: scale(0.95);
//   }
//   &:disabled {
//     cursor: default;
//     opacity: 0.7;
//   }
// `;
