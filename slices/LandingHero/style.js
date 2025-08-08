import styled from "styled-components";

const tokens = {
  maxContentWidth: "68rem",
  surface: "rgba(255,255,255,0.08)",
  surfaceHover: "rgba(255,255,255,0.12)",
  border: "rgba(255,255,255,0.18)",
  error: "#FFB02E",
  primary: "#0066CC",
  primaryHover: "#005AB4",
};

export const Section = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: clamp(1.5rem, 3vw, 3rem);
  padding: clamp(2rem, 5vw, 6rem) clamp(1rem, 6vw, 6rem);
  background: ${({ bgimage }) =>
    bgimage
      ? `linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
         url(${bgimage}) center/cover no-repeat`
      : `linear-gradient(135deg, #0f3d87 0%, #0b2c63 60%, #071f45 100%)`};
  color: white;
  isolation: isolate;

  /* Constrain content width on very wide screens */
  & > * {
    max-width: ${tokens.maxContentWidth};
    width: 100%;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

/* ======= Typography ======= */
export const Title = styled.div`
  margin-bottom: clamp(0.5rem, 1.5vw, 1rem);
  text-wrap: balance; /* progressive enhancement */

  h1 {
    margin: 0 0 clamp(0.25rem, 1vw, 0.75rem) 0;
    /* Fluid type: min, preferred, max */
    font-size: clamp(2rem, 3.5vw + 0.5rem, 3.25rem);
    line-height: 1.05;
    letter-spacing: -0.02em;
    font-weight: 800;
    max-width: 22ch;
    background: linear-gradient(90deg, #ffffff 0%, #cfe8ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent; /* subtle “ink” effect */
  }

  p {
    margin: 0;
    max-width: 60ch;
    font-size: clamp(1rem, 1.1vw + 0.5rem, 1.25rem);
    line-height: 1.5;
    opacity: 0.95;
  }
`;

/* ======= Keyword “chips” ======= */
export const KeywordWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: clamp(0.75rem, 1.5vw, 1.25rem) 0 0 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: clamp(0.5rem, 1.2vw, 0.75rem);
`;

export const Keyword = styled.li`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 0.8rem;
  border-radius: 999px;
  background: ${tokens.surface};
  border: 1px solid ${tokens.border};
  backdrop-filter: saturate(140%) blur(8px);
  -webkit-backdrop-filter: saturate(140%) blur(8px);

  transition: background 150ms ease, transform 150ms ease;
  will-change: background, transform;

  &:hover {
    background: ${tokens.surfaceHover};
    transform: translateY(-1px);
  }

  img {
    width: 22px;
    height: 22px;
    filter: invert(1) opacity(0.9);
  }

  :where(p, span) {
    margin: 0;
    font-weight: 600;
    letter-spacing: 0.01em;
  }
`;

/* ======= Form Card ======= */
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 1.2vw, 0.9rem);
  padding: clamp(1rem, 2.5vw, 2rem);
  border-radius: 18px;

  background: ${tokens.surface};
  border: 1px solid ${tokens.border};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3),
    0 1px 0 rgba(255, 255, 255, 0.06) inset;
  backdrop-filter: blur(12px) saturate(130%);
  -webkit-backdrop-filter: blur(12px) saturate(130%);

  /* Highlight the whole card when any field is focused */
  &:focus-within {
    box-shadow: 0 12px 34px rgba(0, 0, 0, 0.34), 0 0 0 2px ${tokens.ring} inset;
  }

  /* Optional typography for form header slots (Prismic rich text) */
  h2 {
    margin: 0;
    font-size: clamp(1.125rem, 1vw + 0.75rem, 1.5rem);
    line-height: 1.25;
    letter-spacing: -0.01em;
  }

  p {
    margin: 0.25rem 0 0 0;
    font-size: clamp(0.95rem, 0.6vw + 0.75rem, 1.0625rem);
    opacity: 0.9;
  }
`;

/* ======= Inputs ======= */
export const InputWrapper = styled.div`
  display: grid;
  gap: 0.4rem;

  label {
    font-size: 0.95rem;
    font-weight: 600;
    letter-spacing: 0.01em;
  }

  input,
  textarea {
    padding: 0.75rem 0.9rem;
    font-size: 0.975rem;
    font-family: inherit;

    color: white;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid ${tokens.border};
    border-radius: 10px;

    outline: none;
    transition: border-color 140ms ease, box-shadow 140ms ease,
      background 140ms ease;

    &::placeholder {
      color: rgba(255, 255, 255, 0.55);
    }

    &:hover {
      background: rgba(255, 255, 255, 0.08);
    }

    &:focus-visible {
      border-color: ${tokens.ring};
      box-shadow: 0 0 0 3px rgba(59, 160, 255, 0.35);
    }

    &.input-error {
      border-color: ${tokens.error};
      box-shadow: 0 0 0 3px rgba(255, 176, 46, 0.25);
    }
  }

  .error-message {
    color: ${tokens.error};
    font-size: 0.875rem;
    min-height: 1.1em;
    visibility: hidden;

    &.visible {
      visibility: visible;
    }
  }
`;

export const TextArea = styled.textarea`
  resize: vertical;
  min-height: 120px;
  max-height: 200px;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  margin-top: 0.25rem;

  button {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: none;

    background: ${tokens.primary};
    color: white;
    font-weight: 600;
    font-size: 1rem;

    cursor: pointer;
    transition: transform 120ms ease, box-shadow 120ms ease,
      background 120ms ease;

    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.28), 0 0 0 0 rgba(0, 0, 0, 0);

    &:hover {
      background: ${tokens.primaryHover};
      transform: translateY(-1px);
      box-shadow: 0 14px 26px rgba(0, 0, 0, 0.32);
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.28) inset;
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      filter: grayscale(10%);
    }
  }
`;
