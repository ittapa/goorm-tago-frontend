import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 25px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
`;

export const RadioWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const RadioButton = styled.input`
  width: 100%;
  padding: 20px;
  background-color: gray;
  color: black;
  border-radius: 10px;

  &:checked {
    background-color: blue;
    color: white;
  }
`;

export const RadioInput = styled.input`
  display: none; // 기본 라디오 버튼 숨김
`;

export const Label = styled.label<{ selected: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 64px;
  padding: 0 16px;
  border: 1px solid
    ${({ selected }) => (selected ? "var(--primary-50)" : "var(--gray-50)")};
  border-radius: 8px;
  background-color: ${({ selected }) =>
    selected ? "var(--primary-5)" : "var(--gray-5)"};
  color: ${({ selected }) =>
    selected ? "var(--primary-60)" : "var(--gray-60)"};
  cursor: pointer;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  padding: 20px 0;
  color: var(--gray-60);
  margin-top: -40px;
`;
