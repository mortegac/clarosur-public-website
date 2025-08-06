import styled from "styled-components";

export const Section = styled.div`
  background-color: white;
  padding: 1rem 10rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }

  .title h1 {
    font-weight: 900;
    font-size: 2rem;
    color: #3962e9;
    text-align: center;
    margin: 0 0 1rem 0;
  }

  .step-wrapper {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 3rem;
    position: relative;
    padding-bottom: 2rem;

    &::before {
      content: "";
      position: absolute;
      top: 20px;
      left: var(--line-left, 40px);
      right: var(--line-right, 40px);
      height: 2px;
      background-color: #3962e9;
      z-index: 0;
      transition: left 0.3s ease, right 0.3s ease;
    }
  }

  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .step-number {
      position: relative;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      color: white;
      font-weight: 700;
      font-size: 1.2rem;
      background: #3962e9;
      border-radius: 10px;
      margin-bottom: 1rem;
    }

    .step-text {
      text-align: center;
      max-width: 120px;
    }
  }

  .mobile-step-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    .mobile-step {
      align-items: center;
      display: flex;
      gap: 1rem;
    }

    .mobile-step-number {
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      padding: 10px;
      font-weight: bold;
      font-size: 1.5rem;
      color: white;
      background-color: #3962e9;
      border-radius: 5px;
    }

    .mobile-step-text {
    }
  }

  /* Connect to <p>
  .step-number::after {
    content: "";
    position: absolute;
    top: 100%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 20px;
    background-color: #3962e9;
  }*/
`;
