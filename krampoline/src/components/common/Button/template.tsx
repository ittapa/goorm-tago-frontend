import React from "react";
import * as S from "./style";
import { Font } from "@components/common/Font/template";
import { THEME } from "./copy";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: {
    width: string;
    height: string;
  };
  font: string;
  theme?: "white" | "sky" | "blue" | "gray";
  handleClickButton: () => void;
  padding?: string;
  children: React.ReactNode;
}

function Button({
  size,
  font,
  theme = "blue",
  handleClickButton,
  padding,
  children,
  ...props
}: ButtonProps) {
  return (
    <S.Wrapper
      theme={THEME[theme]}
      size={size}
      onClick={handleClickButton}
      padding={padding ?? "0"}
      {...props}
    >
      <Font size={font} align="center">
        {children}
      </Font>
    </S.Wrapper>
  );
}

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: {
    width: string;
    height: string;
  };
  font: string;
  theme?: "white" | "sky" | "blue" | "gray";
  handleClickButton: () => void;
  padding?: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

export function IconButton({
  size,
  font,
  theme = "blue",
  handleClickButton,
  padding,
  children,
  icon,
  ...props
}: IconButtonProps) {
  return (
    <S.Wrapper
      theme={THEME[theme]}
      size={size}
      onClick={handleClickButton}
      padding={padding ?? "0"}
      {...props}
    >
      <S.InnerWrapper>
        <Font size={font} align="center">
          {children}
        </Font>
        <>{icon}</>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}

export default Button;
