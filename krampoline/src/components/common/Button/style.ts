import styled from "@emotion/styled";

export const Wrapper = styled.button<{
  size: { width: string; height: string };
  theme: string;
  padding: string;
}>`
  ${({ theme }) => theme};
  width: ${({ size }) => (size.width === "full" ? "100%" : size.width)};
  height: ${({ size }) => (size.height === "full" ? "100%" : size.height)};
  border-radius: 8px;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${({ padding }) => padding};
  box-sizing: border-box;
  flex-shrink: 0;
`;

export const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
