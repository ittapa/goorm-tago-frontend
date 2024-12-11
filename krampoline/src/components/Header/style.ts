// 스타일드 컴포넌트 작성
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: red;
  box-sizing: border-box;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const Alert = styled.div`
  font-size: 12px;
`;
