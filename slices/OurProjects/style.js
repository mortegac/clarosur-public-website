import styled from "styled-components";

const Section = styled.section`
  text-align: center;
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.div`
  h1 {
    font-weight: 900;
    font-size: 2rem;
    color: #3962e9;
    text-align: center;
    margin: 0 0 1rem 0;
  }
`;

const Project = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 1rem;
  }
`;

const ProjectDescription = styled.div`
  font-size: 1rem;
  text-align: center;
  max-width: 600px;
`;

const CompareSliderWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  border-radius: 16px;
  overflow: hidden;
`;

export {
  Section,
  Title,
  Project,
  ProjectDescription,
  CompareSliderWrapper,
};
