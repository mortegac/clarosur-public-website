import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    text-align: center;
  }

  // @media (max-width: ${(props) => props.theme.breakpoints.lg}) 
  //   margin-top: 200px;
  // }
  // @media (max-width: ${(props) => props.theme.breakpoints.md}) 
  //   margin-top: 64px;
  // }
  // @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
  // margin-top: 64px;
  // }
`;
