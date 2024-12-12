import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

function BackButton() {
  const navigate = useNavigate();
  function handleButtonClick() {
    navigate(-1);
  }
  return (
    <S.Button onClick={handleButtonClick}>
      <S.Image src="/images/left_black.png" alt="뒤로가기" />
    </S.Button>
  );
}

export default BackButton;
