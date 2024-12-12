import React from "react";
import * as S from "./style";

// 모바일 프레임
function Frame({ children }: { children: React.ReactNode }) {
  return <S.Wrapper>{children}</S.Wrapper>;
}

export default Frame;
