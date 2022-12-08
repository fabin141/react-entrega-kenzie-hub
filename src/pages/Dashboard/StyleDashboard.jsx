import styled from "styled-components";

export const StyleDashboard = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--grey-4);
  header {
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid var(--grey-100);
  }
  .header {
    width: 90%;
    padding: 26px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .header > button {
    padding: 8px 25px;
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: var(--grey-100);
    font-size: var(--caption-size);
    font-weight: var(--body-weight-2);
    color: var(--grey-0);
    cursor: pointer;
  }
  .information {
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid var(--grey-100);
  }
  .bodyInformation {
    width: 90%;
    padding: 45px 0;
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 18px;
  }
  h1 {
    font-size: var(--title-size-3);
    font-weight: var(--headline-weight);
    color: var(--grey-0);
  }
  p {
    font-size: var(--caption-size);
    font-weight: var(--caption-weight);
    color: var(--grey-20);
  }
  .description {
    width: 100%;
    display: none;
    justify-content: center;
  }
  .bodyDescription {
    width: 90%;
    padding: 30px 0;
    display: none;
    flex-direction: column;
    text-align: left;
    gap: 18px;
  }
  @media (min-width: 645px) {
    .header {
      width: 50%;
    }
    .body {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    .bodyInformation {
      width: 50%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .description {
      display: flex;
      justify-content: center;
    }
    .bodyDescription {
      width: 50%;
      display: flex;
    }
  }
`;