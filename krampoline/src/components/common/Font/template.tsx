import React from "react";
import * as S from "./style";
import { FONT_STR, FONT_CSS } from "@constants/index";

interface FontProps {
  size: string;
  align?: "left" | "center" | "right";
  padding?: "none" | string;
  children: React.ReactNode;
}

function Font({ size, align = "left", padding = "none", children }: FontProps) {
  return (
    <S.Wrapper size={size} align={align} padding={padding}>
      {children}
    </S.Wrapper>
  );
}

export { Font, FONT_STR };
