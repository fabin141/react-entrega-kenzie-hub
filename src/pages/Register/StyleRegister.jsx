import styled from "styled-components";

export const StyleRegister = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: var(--grey-4);
  div {
    width: 90%;
    margin-top: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  div > button {
    padding: 8px 25px;
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: var(--grey-100);
    font-size: var(--caption-size);
    font-weight: var(--body-weight-2);
    color: var(--grey-0);
    cursor: pointer;
  }
  .form {
    width: 90%;
    margin: 15px 0 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 4px;
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    background-color: var(--grey-100);
  }
  h1 {
    margin: 33px 0 17px;
    font-size: var(--headline-size);
    font-weight: var(--headline-weight);
    color: var(--grey-0);
  }
  span {
    margin-bottom: 22px;
    font-size: var(--caption-size);
    color: var(--grey-20);
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
    border: 1px solid var(--grey-0);
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
  select {
    width: 100%;
    padding: 8px 13px;
    outline: none;
    border: 1px solid var(--grey-0);
    border-radius: 4px;
    background-color: var(--grey-50);
    color: var(--grey-0);
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
  @media (min-width: 356px) {
    div {
      width: 320px;
      transition: 2s;
    }
    .form {
      width: 320px;
      transition: 2s;
    }
  }
`;