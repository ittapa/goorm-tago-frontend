// 스타일드 컴포넌트 작성
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background-color: var(--white);
  padding: 0 20px;
  align-items: center;
  z-index: 100;
`;

export const Logo = styled.img`
  width: 95.71px;
  height: 30px;
`;

export const Alert = styled.div`
  font-size: 12px;
`;
