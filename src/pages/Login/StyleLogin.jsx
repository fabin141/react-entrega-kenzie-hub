import styled from "styled-components";

export const StyleLogin = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: var(--grey-4);
  div {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 4px;
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    background-color: var(--grey-100);
  }
  h1 {
    margin: 33px 0 22px;
    font-size: var(--headline-size);
    font-weight: var(--headline-weight);
    color: var(--grey-0);
  }
  form {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 17px;
  }
  label {
    width: 100%;
    text-align: start;
    font-size: var(--caption-size);
    font-weight: var(--caption-weight);
    color: var(--grey-0);
  }
  input {
    width: 100%;
    margin-bottom: 3px;
    padding: 8px 13px;
    outline: none;
    border: 0.9772px solid var(--grey-0);
    border-radius: 4px;
    background-color: var(--grey-50);
    color: var(--grey-0);
  }
  input::placeholder {
    font-size: var(--caption-size);
    color: var(--grey-20);
  }
  small {
    color: var(--negative);
  }
  form > button {
    width: 100%;
    margin-bottom: 27px;
    padding: 8px;
    font-size: var(--caption-size);
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: var(--color-primary);
    color: var(--white);
    cursor: pointer;
  }
  span {
    margin-bottom: 17px;
    font-size: var(--caption-size);
    color: var(--grey-20);
  }
  button {
    width: 90%;
    margin-bottom: 33px;
    padding: 8px;
    font-size: var(--caption-size);
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: var(--grey-20);
    color: var(--grey-0);
    cursor: pointer;
  }
  @media (min-width: 411px) {
    div {
      width: 369px;
      transition: 2s;
    }
  }
`;