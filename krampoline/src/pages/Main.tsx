import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "@components/common/Banner/template";
import { Font, FONT_STR } from "@components/common/Font/template";
import Button, { IconButton } from "@components/common/Button/template";
import ButtonGrid from "@components/main/ButtonGrid/template";
import { title, buttonList } from "@components/main/copy";
import * as S from "@styles/index";
import RightActive from "@assets/svgs/RightActive";

function Main() {
  const navigate = useNavigate();

  function handleClickButton(dest: string) {
    navigate(`schedule?dest=${dest}`);
  }

  return (
    <S.Wrapper>
      <Font size={FONT_STR.S26} padding={"0 0 0 4px"}>
        {title}
      </Font>
      <ButtonGrid
        buttonList={buttonList}
        handleClickButton={handleClickButton}
      />
      <Button
        size={{ width: "full", height: "48px" }}
        theme="white"
        font={FONT_STR.R17}
        handleClickButton={() => {}}
        disabled={true}
        style={{ cursor: "auto" }}
      >
        <span
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
          }}
        >
          다른 곳으로 갈래요 <RightActive />
        </span>
      </Button>
      <Banner />
      <div style={{ width: "100%", height: "100px" }}></div>
    </S.Wrapper>
  );
}

export default Main;
