import styled from "styled-components";

export const Section = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 4rem 10rem;
  background: ${({ bgimage }) =>
    bgimage ? `url(${bgimage}) center/cover no-repeat` : "#243c70"};
  color: white;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
    display: ${({ bgimage }) => (bgimage ? "block" : "none")};
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    grid-template-columns: 1fr;
  }
`;

export const KeywordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

export const Keyword = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const Title = styled.div`
  margin-bottom: 10px;
  h1 {
    margin: 0;
    text-align: left;
  }

  p {
    font-size: 1rem;
    margin: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  h2 {
    margin: 0;
    line-height: 1.2;
  }

  p {
    margin: 0;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.5rem;
  }

  input {
    padding: 0.5rem;
    font-size: small;
    font-family: inherit;
    border: none;
    border-radius: 5px;
  }

  .error-message {
    color: #ffd700;
    font-size: 0.875rem;
    visibility: hidden;

    &.visible {
      visibility: visible;
    }
  }
`;

export const TextArea = styled.textarea`
  resize: vertical;
  max-height: 150px;
  max-width: 100%;
  width: 100%;
  padding: 10px;
  font-size: small;
  font-family: inherit;
`;

export const ButtonWrapper = styled.div`
  button {
    width: 100%;
    padding: 0.75rem 1.5rem;
    background-color: #0070f3;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;

    &:hover {
      background-color: #005bb5;
    }
  }
`;
