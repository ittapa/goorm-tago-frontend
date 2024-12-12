import React from "react";
import * as S from "./style";
import { ScheduleType } from "./type";
import { SCHEDULE } from "./copy";
import Button, { IconButton } from "@components/common/Button/template";
import { FONT_STR } from "@constants/index";

function ScheduleButton({
  dest,
  handleClickButton,
}: {
  dest: string;
  handleClickButton: (schedule: ScheduleType) => void;
}) {
  return (
    <S.Wrapper>
      <IconButton
        theme="sky"
        padding="0 24px"
        font={FONT_STR.M19}
        size={{ width: "full", height: "100px" }}
        handleClickButton={() => handleClickButton(SCHEDULE.NOW)}
        icon={<CarIcon />}
      >
        <span>지금 출발하기</span>
      </IconButton>
      <IconButton
        theme="sky"
        padding="0 24px"
        font={FONT_STR.M19}
        size={{ width: "full", height: "100px" }}
        handleClickButton={() => handleClickButton(SCHEDULE.LATER)}
        icon={<CalendarIcon />}
      >
        나중에 출발하기
      </IconButton>
    </S.Wrapper>
  );
}

const CarIcon = () => {
  return (
    <img src="/images/car_active.png" width={64} height={64} alt="car icon" />
  );
};

const CalendarIcon = () => {
  return (
    <img
      src="/images/calendar.png"
      width={64}
      height={64}
      alt="calendar icon"
    />
  );
};

export default ScheduleButton;
