import styled from "@emotion/styled";

export const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 214px 0 0 0;
  z-index: 10;
  background-color: white;
  color: black;
`;

export const Image = styled.img`
  margin-top: 20px;
  width: 100px;
  height: 117px;
  transition: transform 0.5s;
  /* 왼쪽에서 오른쪽 긑으로 이동, 반복 */
  animation: slide 2s linear infinite;
  @keyframes slide {
    0% {
      transform: translateX(-390px);
    }
    100% {
      transform: translateX(390px);
    }
  }
`;
