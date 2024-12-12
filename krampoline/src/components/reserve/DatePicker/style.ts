import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--gray-5);
  border-radius: 8px;
  border: 1px solid var(--gray-30);
`;

export const DatePickerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const CircleButton = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 40px;
  border: 1px solid var(--gray-20);

  &:disabled {
    background-color: var(--gray-5);
    cursor: not-allowed;
  }
`;
