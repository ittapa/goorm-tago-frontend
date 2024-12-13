import React from "react";
import * as S from "./style";
import Button from "@components/common/Button/template";
import { FONT_STR } from "@components/common/Font/template";

interface ButtonGridProps {
  buttonList: {
    location_name: string;
    road_address: string;
    longitude: string;
    latitude: string;
  }[];
  handleClickButton: (dest: string) => void;
}

function ButtonGrid({ buttonList, handleClickButton }: ButtonGridProps) {
  return (
    <S.Wrapper>
      {buttonList.map(({ location_name, road_address }) => (
        <Button
          key={road_address}
          theme={"sky"}
          font={FONT_STR.M19}
          size={{ width: "full", height: "64px" }}
          handleClickButton={() => handleClickButton(location_name)}
        >
          {location_name}
        </Button>
      ))}
    </S.Wrapper>
  );
}

export default ButtonGrid;
