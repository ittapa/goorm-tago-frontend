import React from "react";
import Frame from "@components/common/Frame/template";
import Header from "@components/common/Header/template";
import GnB from "@components/common/GnB/template";
import * as S from "./style";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Frame>
      <Header />
      <S.Wrapper>{children}</S.Wrapper>
      <GnB />
    </Frame>
  );
}

export default Layout;
