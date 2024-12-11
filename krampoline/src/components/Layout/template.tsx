import React from "react";
import Frame from "@components/Frame/template";
import Header from "@components/Header/template";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Frame>
      <Header />
      {children}
    </Frame>
  );
}

export default Layout;
