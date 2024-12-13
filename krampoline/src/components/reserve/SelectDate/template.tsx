import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import DatePicker from "../DatePicker/template";
import { Font, FONT_STR } from "@components/common/Font/template";
import Button from "@components/common/Button/template";
import CheckActive from "@assets/svgs/CheckActive";
import CheckDisable from "@assets/svgs/CheckDisable";
import { speakText, stopText } from "@utils/textToSpeach";

function SelectDate({ dest }: { dest: string }) {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState<"group" | "alone">(
    "group"
  );

  const handleChange = (value: "group" | "alone") => {
    setSelectedValue(value);
  };

  const handleNext = (dest: string) => {
    navigate(`/recommend?dest=${dest}&type=${selectedValue}`);
  };

  useEffect(() => {
    speakText("출발 날짜를 선택해주세요.");
    return () => {
      stopText();
    };
  }, []);

  return (
    <S.Wrapper>
      <DatePicker dest={dest} />

      <div
        style={{
          width: "100%",
          height: "6px",
          backgroundColor: "var(--gray-10)",
          position: "absolute",
          top: "326px",
          left: "0",
        }}
      />

      <S.ButtonWrapper>
        <S.RadioInput
          type="radio"
          id="group"
          name="group"
          value="group"
          checked={selectedValue === "group"}
          onChange={() => handleChange("group")}
        />
        <S.Label htmlFor="group" selected={selectedValue === "group"}>
          {selectedValue === "group" ? <CheckActive /> : <CheckDisable />}
          <Font size={FONT_STR.M17}>함께 갈래요</Font>
        </S.Label>

        <S.RadioInput
          type="radio"
          id="alone"
          name="alone"
          value="alone"
          checked={selectedValue === "alone"}
          onChange={() => handleChange("alone")}
        />
        <S.Label htmlFor="alone" selected={selectedValue === "alone"}>
          {selectedValue === "alone" ? <CheckActive /> : <CheckDisable />}
          <Font size={FONT_STR.M17}>혼자 갈래요</Font>
        </S.Label>
      </S.ButtonWrapper>

      <S.InfoWrapper>
        <img src="/images/info.png" width={24} height={24} alt="info" />
        <Font align="left" size={FONT_STR.R16}>
          <span>
            목적지까지 이웃과 함께 갈 경우{" "}
            <span style={{ fontWeight: "bold" }}>최대 5,200원</span>을 아낄 수
            있어요.
          </span>
        </Font>
      </S.InfoWrapper>

      <Button
        style={{ marginTop: "40px" }}
        font={FONT_STR.M19}
        theme={"blue"}
        size={{ width: "full", height: "64px" }}
        handleClickButton={() => handleNext(dest)}
      >
        다음
      </Button>
    </S.Wrapper>
  );
}

export default SelectDate;
