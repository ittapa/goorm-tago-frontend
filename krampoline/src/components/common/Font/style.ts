import { FONT_CSS } from "@constants/index";
import styled from "@emotion/styled";

export const Wrapper = styled.span<{
  size: string;
  align: string;
  padding: string;
}>`
  ${({ size }) => `${FONT_CSS[size]} !important`};
  line-height: 150%;
  display: flex;
  flex-direction: column;
  padding: ${({ padding }) => padding};
  text-align: ${({ align }) => align};
  white-space: pre-line;
`;

console.log(Wrapper);
