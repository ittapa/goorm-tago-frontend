import { ButtonGrid } from "@components/main";
import React from "react";
import { buttonList } from "@components/main/copy";
import Button from "@components/common/Button/template";
import { FONT_STR } from "@constants/index";
import RightActive from "@assets/svgs/RightActive";
import { Font } from "@components/common/Font/template";
import { useNavigate } from "react-router-dom";

function ModaSchedule() {
  const navigate = useNavigate();
  function handleClickButton(dest: string) {
    navigate(`/moda/reserve?dest=${dest}`);
  }
  return (
    <div>
      <Font size={FONT_STR.S26} padding={"0 0 0 4px"}>
        {"어디로 함께 갈까요?"}
      </Font>
      {/* <ButtonGrid
        buttonList={}
        handleClickButton={handleClickButton}
      /> */}
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
            gap: "11px",
          }}
        >
          다른 곳으로 갈래요 <RightActive />
        </span>
      </Button>
    </div>
  );
}

export default ModaSchedule;
