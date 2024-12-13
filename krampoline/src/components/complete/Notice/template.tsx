import React, { useEffect } from "react";
import { speakText, stopText } from "@utils/textToSpeach";
import { useNavigate } from "react-router-dom";
import Button from "@components/common/Button/template";
import { Font, FONT_STR } from "@components/common/Font/template";
import * as S from "./style";

function Notice() {
  const navigate = useNavigate();
  function handleRouteToHome() {
    navigate(`/`);
  }

  useEffect(() => {
    speakText("예약을 완료했어요! 예약이 확정되면 알려드릴게요.");
    return () => {
      stopText();
    };
  }, []);

  return (
    <S.Wrapper>
      <img src="/images/notice.png" alt="notice" width={60} height={60} />
      <Font align="center" size={FONT_STR.S26}>
        예약을 완료했어요!
      </Font>
      <Font align="center" size={FONT_STR.R18}>
        예약이 확정되면 알려드릴게요.
      </Font>
      <Button
        font={FONT_STR.B16}
        size={{ width: "full", height: "64px" }}
        handleClickButton={handleRouteToHome}
        style={{ marginTop: "180px" }}
      >
        확인
      </Button>
    </S.Wrapper>
  );
}

export default Notice;
