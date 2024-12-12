import styled from "@emotion/styled";

export const Wrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;

  button {
    background-color: var(--primary-5);
    color: var(--primary-60) !important;
    border: 1px solid var(--primary-30);
    border-radius: 8px;
  }
`;
