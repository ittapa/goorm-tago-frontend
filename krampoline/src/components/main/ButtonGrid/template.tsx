import React from "react";
import * as S from "./style";
import Button from "@components/common/Button/template";
import { FONT_STR } from "@components/common/Font/template";

interface ButtonGridProps {
  buttonList: {
    id: number;
    name: string;
  }[];
  handleClickButton: (dest: string) => void;
}

function ButtonGrid({ buttonList, handleClickButton }: ButtonGridProps) {
  return (
    <S.Wrapper>
      {buttonList.map(({ id, name }) => (
        <Button
          key={id}
          theme={"sky"}
          font={FONT_STR.M19}
          size={{ width: "full", height: "64px" }}
          handleClickButton={() => handleClickButton(name)}
        >
          {name}
        </Button>
      ))}
    </S.Wrapper>
  );
}

export default ButtonGrid;
