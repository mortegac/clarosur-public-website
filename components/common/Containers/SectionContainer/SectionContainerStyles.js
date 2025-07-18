import styled from "styled-components";
export const SectionContainerBase = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${(props) => props.bgImage ? '0' : '64px 24px'};
  position: relative;
  padding: ${(props) => props.boxed && "64px 24px"};
  // background: #5FDC00;
  // background: ${(props) => props.background};
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  z-index: ${(props) => props.boxed && "1"};
  @media (max-width: 768px) {
    padding: ${(props) => props.bgImage ? '0' : '32px 16px'};
    // padding-top: ${(props) => props.paddingMobileTop};
    // padding-bottom: ${(props) => props.paddingMobileBottom};
    // padding: ${(props) => props.boxed && "0 16px"};
    borderRadius: 0;
  }
  
  @media (max-width: 480px) {
    // margin: ${(props) => props.boxed && "32px 0"};
    borderRadius: 0;
  }
`;

export const SectionContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${(props) => props.bgImage ? '64px 24px' : '0'};
  position: relative;
  z-index: 10;
  
  @media (max-width: 768px) {
    padding: ${(props) => props.bgImage ? '32px 16px' : '0'};
  }
`;

export const SectionBackgroundImage = styled.div`
  background-image: ${(props) => props.bgImageSrc ? `url(${props.bgImageSrc})` : 'none'};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    background-image: ${(props) => props.bgImageSrc ? `url(${props.bgImageSrc})` : 'none'};
  }
`;
